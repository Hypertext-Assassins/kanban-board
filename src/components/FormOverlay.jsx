import React, {useState, useRef } from 'react'
import { Button, Popover, OverlayTrigger } from 'react-bootstrap'
import AddTask from '../components/AddTask';
import '../App.css'

const FormOverlay = (props) => {

  const [formDisplay, setFormDisplay] = useState(false);

  const handleShowForm = () => {
    if (formDisplay) setFormDisplay(false);
    else setFormDisplay(true);
  }

  return ( 
    <>  
      {(!formDisplay) ?
        <button variant="success"
          className="ui teal button tiny"
          id="btn"  
          onClick={handleShowForm}
          ><i className="plus fitted icon"></i></button>
        :
        <button variant="success"
          id="btn"
          className="ui button tiny" 
          onClick={handleShowForm}
          ><i className="minus fitted icon"></i></button>
      }
      {!formDisplay?
        <div className='hidden-form'></div>
      :
        <div className='show-form'>
        <AddTask 
          handleAddCard={props.handleAddCard} 
          colName={props.colName}
          handleShowForm={handleShowForm}
        />
        </div>
      }
      </>
   );
}
 
export default FormOverlay;


// const popover = (
//     <Popover id="popover-basic">
//       <Popover.Title as="h3">Add New</Popover.Title>
//       <Popover.Content>
//         <form onSubmit={props.addCard}>
//             <input
//               placeholder='enter your task here'
//             ></input>
//         </form>
//       </Popover.Content>
//     </Popover>
//   );
  
//   const Example = () => (
//     <OverlayTrigger trigger="click" placement="right" overlay={popover}>
//       <Button variant="success">Click me to see</Button>
//     </OverlayTrigger>
//   );
    
  
// export default AddTask;