import React from 'react'
import './bookChapters.css'
import { LuSearchX } from "react-icons/lu";

const BookChapters = ({data}) => {
  console.log(data.bookChapters);
  const  BookChapters  = data.bookChapters;
  const name= data.name;
  return (
    <div className="publicationsTableContainer">
    {BookChapters.length>0 &&
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
        {BookChapters.map((bookchapter, index) => (
          <tr key={index}>
            <td>{name}</td>
            <td>{bookchapter.citation}</td>
            <td>{bookchapter.authors.join(', ')}</td>
            <td>{bookchapter.journal_name}</td>
            <td>{bookchapter.paper_title}</td>
            <td>{bookchapter.year}</td>
            <td>{bookchapter.elite_journal || 'N/A'}</td>
          </tr>
        ))}
      </tbody>
    </table>}
    {BookChapters.length===0 &&  <div className='not-found'> <span>No Book Chapters found</span> <LuSearchX /></div>}
  </div>
  )
}

export default BookChapters
