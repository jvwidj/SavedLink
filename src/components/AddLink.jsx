import React, {useState, useTransition} from 'react'
import { Form, InputGroup, Button } from 'react-bootstrap'

export default function AddLink(props) {
    const [name, setName] = useState("")
    const [url, setUrl] = useState("")

  return (
    <div>
        <InputGroup.Text id="card-title">Link Title</InputGroup.Text>
        <InputGroup className="mb-3">
            <Form.Control
                placeholder="title"
                value={name}
                onChange={(event) => setName(event.target.value)}
            /> 
            <Form.Control
                placeholder="url"
                value={url}
                onChange={(event) => setUrl(event.target.value)}
            />     
        </InputGroup>
        <button variant="success" onClick={() =>props.getName(name, url)}>Add Link</button>
    </div>
  )
}
