import React, { useState } from "react"

import Header from "./Header";
import Footer from "./Footer";
import Link from "./LinkList";
import AddLink from "./AddLink";

import savedLinks from "../savedLink"
//import Search from "./Search";
console.log(savedLinks)

function CreateCard(link, index){
  return (
    <Link 
      key={index}
      title={link.title}
      url={link.url}
    />
  )
}


function App() {
  const [list, setList] = useState(savedLinks)
  const [search, setSearch] = useState("")

  function deleteItem (index) {
    console.log("delete item")
    let array = [...list]
    array.splice(index, 1)
    setList(array)
  }

  //console.log(list)
  return (
    <div className="App">

      <Header />
       {/* Search component */}
       <div className= "search">
        <input
            type="text"
            placeholder='Search link...'
            onChange={(event) => {
                setSearch(event.target.value)
            }} 
        />
    </div>

      <div>
        {/* Add link component */}
        <AddLink getName={(name, url) => 
          //console.log(name, url)
          setList((prevValue) => [...prevValue, {title:name, url:url}])
        }/>
      </div>

      <div>
        {/* Link component */}
        {list.filter((val) => {
          if (search === "") {
            return val
          } else if (
            val.title.toLowerCase().includes(search.toLowerCase())) {
              return val
            }
        }).map(CreateCard)}
      </div>

       <Footer />
    </div>
  );
}


export default App;
