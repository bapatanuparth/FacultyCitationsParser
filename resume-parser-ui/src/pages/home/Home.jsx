import React, { useRef, useState } from "react";
import "./home.css";
import Upload from "../../components/upload/Upload";
import ShowResult from "../../components/showResult/ShowResult";
import Container from "../../components/container/Container";
import { PrimeIcons } from "primereact/api";
import Hero from "../../components/hero/Hero";

const Home = () => {
  const [showChildB, setShowChildB] = useState(false);
  const homeContainerRef=useRef(null)

  const handleBack = () => {
    setShowChildB(false); // Hide ShowResult and show Upload
    // Optionally reset data if needed
  };

  const scrollToHomeContainer= () => {
    homeContainerRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <div className="homeWrapper">
      <Hero scrollToHomeContainer={scrollToHomeContainer}></Hero>
      <div className="homeContainer" ref={homeContainerRef}>
        {showChildB && (
          <button className="back-button" onClick={handleBack}>
            <i className="pi pi-arrow-left" style={{ fontSize: "1rem" }}></i>
          </button>
        )}
        <div className="wrapper">
          <Container
            showChildB={showChildB}
            setShowChildB={setShowChildB}
          ></Container>
        </div>
      </div>
    </div>
  );
};

export default Home;
