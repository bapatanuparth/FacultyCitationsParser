import React from 'react'
import './eliteJournals.css'
import { LuSearchX } from "react-icons/lu";

const EliteJournals = ({data}) => {
    const eliteEntries = [
        ...data.publications.filter(entry => entry.elite_journal !== null),
        ...data.conferences.filter(entry => entry.elite_journal !== null)
      ];
      const name= data.name;
  return (
    <div className="publicationsTableContainer">
      {eliteEntries.length>0 && <table>
        <thead>
        <tr>
        <th className='nameColumn'>Name</th>
            <th className='citationColumn'>Citation</th>
            <th className='authorColumn'>Authors</th>
            <th className='journalColumn'>Journal Name</th>
            <th className='paperColumn'>Paper Title</th>
            <th className ='yearColumn'>Year</th>
            <th className ='eliteColumn'>Elite Journal</th>
          </tr>
        </thead>
        <tbody>
          {eliteEntries.map((elite, index) => (
            <tr key={index}>
              <td>{name}</td>
              <td>{elite.citation}</td>
              <td>{elite.authors.join(', ')}</td>
              <td>{elite.journal_name}</td>
              <td>{elite.paper_title}</td>
              <td>{elite.year}</td>
              <td>{elite.elite_journal || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>}
      {eliteEntries.length===0 && <div className='not-found'> <span>No Elite Journal submissions found</span> <LuSearchX /></div>}
    </div>
  )
}

export default EliteJournals
