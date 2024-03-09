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
      
    </div>
  )
}

export default ShowResult
