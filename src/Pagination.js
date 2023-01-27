import React from 'react'
import { useGlobalContext } from './Context'

const Pagination = () => {
  const {page,nbPages,getnextpage,getprevpage}=useGlobalContext();
  return (
    <div className="pagination-container">
      <button onClick={()=>getprevpage()}>PREV</button>
      <span>{page+1} of {nbPages}</span>
      <button onClick={()=>getnextpage()} >NEXT</button>
    </div>
  )
}

export default Pagination