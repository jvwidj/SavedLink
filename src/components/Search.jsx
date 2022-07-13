import React, { useState } from 'react'

export default function Search() {

    const [search, setSearch] = useState("")

  return (
    <div className= "search">
        <input
            type="text"
            placeholder='Search link...'
            onChange={(event) => {
                setSearch(event.target.value)
            }} 
        />
    </div>
  )
}
