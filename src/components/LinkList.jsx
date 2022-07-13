import React, {useState} from "react"

function Link(props){

    const [isMouseOver, setMouseOver] = useState(false)

    function mouseOver(){
        setMouseOver(true)
    }

    function mouseOut(){
        setMouseOver(false)
    }


    return (
        <div className="link">
            <h1>{props.title}</h1>

            <a href={props.url} target="_blank" rel="noreferrer">
            <button
            style={{backgroundColor: isMouseOver ? "#1d3557" : "#a8dadc"}}
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
            >
            Go to Link</button>
            </a>

            <button>Delete </button>
        </div>
    )
}

export default Link;