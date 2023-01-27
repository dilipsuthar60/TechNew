import React, { useState } from 'react'
import { useGlobalContext } from './Context'

const Search = () => {
  const {query,searchpost}=useGlobalContext();
  return (
    <div className="search_container">
      <h1 className="search-title">Tech News On The Go</h1>
      <input spellCheck="false" type="text" className="search" placeholder='search here'  value={query} onChange ={(e)=>searchpost(e.target.value)} />
    </div>
  )
}

export default Search