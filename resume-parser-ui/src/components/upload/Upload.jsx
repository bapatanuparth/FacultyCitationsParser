import React, { useRef, useState } from "react";
import "./upload.css";
import { FileUpload } from "primereact/fileupload";
import { Toast } from "primereact/toast";
import { spiral,quantum } from 'ldrs'

quantum.register()

// Default values shown


const Upload = ({onDataFetch}) => {
  const [year, setYear] = useState("");
  const [parseText, setParseText]= useState("Parse Text")
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("Choose file");
  const [isLoading, setIsLoading] = useState(false);
  const toast = useRef(null);

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const onUpload = async (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name); // Update the fileName state to reflect the selected file's name
      console.log(selectedFile); // This will log the selected file object correctly
      toast.current.show({
        severity: "success",
        summary: "Success",
        detail: "File Selected",
      });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("clicked");

    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("year", year);
      setIsLoading(true); 
      setParseText("Parsing")
      try {
        const response = await fetch("http://localhost:5000/upload", {
          method: "POST",
          body: formData,
        });
        setIsLoading(false);
        setParseText("Parse Text")
        if (response.ok) {
          const data = await response.json(); // or response.json() if your server responds with JSON
          toast.current.show({
            severity: "success",
            summary: "Success",
            detail: "Resume Parsed",
          });
          console.log(data); // Handle the response data as needed
          setFile(null);
          setFileName("Choose file");
          setYear('');
          onDataFetch(data)
          
        } else {
          alert("Failed to upload file");
          console.error("Failed to upload file:", response.statusText);
        }
      } catch (e) {
        alert("Error uploading file");
        console.error("Error uploading file:", e);
      }
    } else {
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "File not Selected",
      });
    }
  };

  return (
    <div className="uploadWrapper">
      <div className="uploadLeft">
        <h2>Instructions</h2>
        <div className="instructions">
          <span>Select the resume to parse.</span>
         <span>Enter the year that you want to extract data for.</span>
        </div>
      </div>
      <form className="inputForm">
        <div className="inputWrapper">
          <div className="uploadButton">
            <Toast ref={toast} />
            <label htmlFor="file-upload" className="custom-file-upload">
              {fileName}
            </label>
            <input
              id="file-upload"
              type="file"
              onChange={onUpload}
              style={{ display: "none" }}
            />
          </div>
          <div className="inputText">
            <input
              type="text"
              placeholder="Year of citations"
              value={year}
              onChange={handleYearChange}
            />
          </div>
        </div>
        <button className="submitButton" onClick={onSubmit}>
        {parseText}
          {isLoading && <div className="parsingText"><l-quantum
  size="20"
  speed="0.9" 
  color="white" 
></l-quantum></div>}
        </button>

      </form>
    </div>
  );
};

export default Upload;
