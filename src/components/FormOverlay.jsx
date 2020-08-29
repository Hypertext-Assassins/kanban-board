import React, {useState, useRef } from 'react'
import { Button, Popover, OverlayTrigger } from 'react-bootstrap'
import AddTask from '../components/AddTask';



const FormOverlay =  (props) => {

  const [formDisplay, setFormDisplay] = useState(true);

  const handleClick = () => {
    if (formDisplay) setFormDisplay(false);
    else setFormDisplay(true);
  }

  return ( 
    <>
      <OverlayTrigger trigger="click" placement="right" overlay={
        <AddTask handleAddCard={props.handleAddCard} 
          colName={props.colName}
        />
      }>
        {
          (formDisplay) ?
        <Button variant="success"
        className="ui blue button"  
        onClick={handleClick}
        >+</Button>
        :
        <Button variant="success"
        className="ui button" 
        onClick={handleClick}
        >-</Button>
      }
      </OverlayTrigger>
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