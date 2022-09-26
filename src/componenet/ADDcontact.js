
import React, { useState } from 'react';
import {Button,Form , Modal }from 'react-bootstrap';


const ADDcontact = (props) => {
    const [show, setShow] = useState(false);
const [inputs,setInputs]=useState([{
  id:1,
  title:"",
  description:"",
  posteURL:"",
  rating: "",
     
    },

])
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange=(e)=>{
    setInputs({...inputs,[e.target.name]:e.target.value})

  }
  const handleSave=()=>{
    props.handleADDcontact(inputs)
  }
  return (
    <div>
        <>
      <Button variant="primary" onClick={handleShow}>
       INSCRIPTION
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>id</Form.Label>
              <Form.Control
                type="id"
                placeholder="identification"
                name="id"
                onChange= {handleChange}
                autoFocus
              />
              <Form.Label> title</Form.Label>
              <Form.Control
                type="text"
                placeholder="put your Title"
                name="title"
                onChange= {handleChange}
                autoFocus
              />
              <Form.Label>description</Form.Label>
              <Form.Control
                type="text"
                placeholder="put the discription"
                onChange= {handleChange}
               name="description"
                autoFocus
              />
              <Form.Label>posteURL</Form.Label>
              <Form.Control
                type="text"
                placeholder="posteURL"
                name="posteURL"
                onChange= {handleChange}
                autoFocus
              />
              <Form.Label>rating</Form.Label>
              <Form.Control
                type="text"
                placeholder="put thr rating "
              name="rating"
                onChange= {handleChange}
                autoFocus
              />
              
            </Form.Group>
          
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    </div>
  )
}

export default ADDcontact
