import React from 'react'
import './publications.css'
import publicationsData from '../../dummyData.json'; 
import { LuSearchX } from "react-icons/lu";


const Publications = ({data}) => {

  const allPublications= data.reduce((acc, person)=>{
    const currPersonPubs = person.publications.map(pub=>({...pub, name:person.name}));
    return [...acc, ...currPersonPubs];
  }, []);
  
  console.log(allPublications)
  // console.log(data)
  // const  Publications  = data.publications;
  // const name= data.name;
  return (
    <div className="publicationsTableContainer">
      {allPublications.length>0 &&
      <table>
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
          {allPublications.map((publication, index) => (
            <tr key={index}>
              <td>{publication.name}</td>
              <td>{publication.citation}</td>
              <td>{publication.authors.join(', ')}</td>
              <td>{publication.journal_name}</td>
              <td>{publication.paper_title}</td>
              <td>{publication.year}</td>
              <td>{publication.elite_journal || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>}
      {<div className='not-found'><span>No Publications found</span> <LuSearchX /></div>}
    </div>
  )
}

export default Publications
