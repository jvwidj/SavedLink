import React, { useState } from "react"

import Header from "./Header";
import Footer from "./Footer";
import AddLink from "./AddLink";
import Link from "./LinkList"

import savedLinks from "../savedLink"
//import Search from "./Search";
console.log(savedLinks)

function App() {
  const [list, setList] = useState(savedLinks)
  const [search, setSearch] = useState("")

  function deleteItem (index) {
    console.log("delete item")
    let newList = [...list]
    newList.splice(index, 1)
    setList(newList)
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
        {/* Link List  component */}

        {list.filter((val) => {
          if (search === "") {
            return val
          } else if (
            val.title.toLowerCase().includes(search.toLowerCase())) {
              return val
            }
        }).map((object, index) => 
        <Link 
          key={index} 
          index={index} 
          title={object.title} 
          url={object.url} 
          delete={(i) => deleteItem(i)}  
        />)}
        
      </div>

       <Footer />
    </div>
  );
}


export default App;
