import React, {useState} from "react"

function Link(props){

    const [isMouseOver, setMouseOver] = useState({
        link: false,
        delete: false
    })

    function mouseOver(number){
         number === 1 ? setMouseOver(prevValue => ({...prevValue, link: true})) : setMouseOver({...isMouseOver, delete: true}) 
    }

    function mouseOut(number){
        number === 1 ? setMouseOver(prevValue => ({...prevValue, link: false})) : setMouseOver({...isMouseOver, delete: false}) 
    }


    return (
        <div className="link">
            <h1>{props.title}</h1>

            <a href={props.url} target="_blank" rel="noreferrer">
            <button
            style={{backgroundColor: isMouseOver.link ? "#1d3557" : "#a8dadc"}}
            onMouseOver={() => mouseOver(1)}
            onMouseOut={() =>mouseOut(1)}
            >
            Go to Link</button>
            </a>

            <button 
            style={{backgroundColor: isMouseOver.delete ? "#1d3557" : "#a8dadc"}}
            onMouseOver={() => mouseOver(2)}
            onMouseOut={() => mouseOut(2)}
            onClick={() => {
                props.delete(props.index)
                console.log(`${props.title} card deleted`)}}>Delete </button>
        </div>
    )
}

export default Link;