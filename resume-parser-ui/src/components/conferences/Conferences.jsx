import React from 'react'
import './conferences.css'
import { LuSearchX } from "react-icons/lu";

const Conferences = ({data}) => {
  console.log(data.conferences);
  const  Conferences  = data.conferences;
  return (
    <div className="publicationsTableContainer">
      {Conferences.length>0 &&
      <table>
        <thead>
          <tr>
          <th className='citationColumn'>Citation</th>
            <th className='authorColumn'>Authors</th>
            <th className='journalColumn'>Journal Name</th>
            <th className='paperColumn'>Paper Title</th>
            <th className ='yearColumn'>Year</th>
            <th className ='eliteColumn'>Elite Journal</th>
          </tr>
        </thead>
        <tbody>
          {Conferences.map((conference, index) => (
            <tr key={index}>
              <td>{conference.citation}</td>
              <td>{conference.authors.join(', ')}</td>
              <td>{conference.journal_name}</td>
              <td>{conference.paper_title}</td>
              <td>{conference.year}</td>
              <td>{conference.elite_journal || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>}
      {Conferences.length===0 &&  <div className='not-found'> <span>No Conferences found</span> <LuSearchX /></div>}
    </div>
  )
}

export default Conferences
