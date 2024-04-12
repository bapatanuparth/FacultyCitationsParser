import React, { useState } from 'react'
import './showResult.css'
import Publications from '../publications/Publications'
import Conferences from '../conferences/Conferences'
import BookChapters from '../Book chapters/BookChapters'
import EliteJournals from '../eliteJournals/EliteJournals'



const ShowResult = ({data, onBack}) => {

  const [activeTab, setActiveTab] = useState('Publications');

  const tabs = ['Publications', 'Conferences', 'Book Chapters', 'Elite Journal Publications'];
  
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
};

  const handleDownloadExcel= async function(){
    try {
      const response = await fetch('http://localhost:5000/createExcel', {
        method:'POST',
        headers:{
          'Content-type':'application/json',
        },
        body:JSON.stringify(data)
      })
      
      console.log(response)
      if(!response.ok){
        throw new Error(`Error: ${response.statusText}`)
      }

      const blob = await response.blob();
      const fileURL=window.URL.createObjectURL(blob);
      const fileLink= document.createElement('a');
      fileLink.href=fileURL;
      fileLink.setAttribute('download', 'output.xlsx');
      document.body.appendChild(fileLink);
      fileLink.click();

      //cleanup
      document.body.removeChild(fileLink);
      window.URL.revokeObjectURL(fileURL)

    } catch (error) {
      console.error("There was an error downloading the Excel file:", error);
    }
  }
  return (
    <div className='resultWrapper'>
      <nav className='resultTabs'>

        {tabs.map(tab => (
          <div
          key={tab}
          className={`navTab ${activeTab === tab ? 'active' : 'inactive'}`}
          onClick={() => handleTabClick(tab)}
          >
                    <span>{tab}</span>
                </div>
            ))}
      </nav>
      <div className="resultTables">
          {(activeTab==='Publications') && <Publications data={data}></Publications>}
          {(activeTab==='Conferences') && <Conferences data={data}></Conferences>}
         {(activeTab==='Book Chapters') && <BookChapters data={data}></BookChapters>}
         {(activeTab==='Elite Journal Publications') && <EliteJournals data={data}></EliteJournals>}
       
      </div>
      <button onClick={handleDownloadExcel} className="submitButton excelDownload">Download Excel</button>
      
    </div>
  )
}

export default ShowResult
