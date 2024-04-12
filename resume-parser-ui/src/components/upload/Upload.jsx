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
  const [files, setFiles] = useState([]);
  const [fileNames, setFileNames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useRef(null);

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const onUpload = async (event) => {
    
    const selectedFiles = event.target.files;
    
    if (selectedFiles.length>0) {
      setFiles(selectedFiles);
      const fileNamesList = Array.from(selectedFiles).map(file => file.name);
      setFileNames(fileNamesList);
      console.log(fileNamesList)
      toast.current.show({
        severity: "success",
        summary: "Success",
        detail: "Files Selected",
      });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("clicked");

    if (files.length>0) {
      const formData = new FormData();
      Array.from(files).forEach(file => {
        formData.append("files", file); // Append each file under the same 'files' key
      });
      formData.append("year", year);
      setIsLoading(true); 
      setParseText("Parsing")
      try {
        const response = await fetch("http://localhost:5000/uploadMany", {
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
          setFiles([]);
          setFileNames("Choose file");
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
              Choose files
            </label>
            <input
              id="file-upload"
              type="file"
              onChange={onUpload}
              multiple
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
       <div className="filesUploaded">
          {fileNames.map((name, index) => (
            <div key={index} className="singleFile">{name}</div>
          ))}
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
