import React, {useState} from 'react';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import '../App.css';



const popover = (
    <Popover className="popover">
      <Popover.Title className="popover-title">Tips</Popover.Title>
      <Popover.Content>
        <p>
           <li> Click the "Add New Column" button to create a new column. </li>
           <hr></hr>
           <li> Click on the column name to change the title of the column. </li>
           <hr></hr>
           <li> Click on the X to delete a task within a column. </li>
           <hr></hr>
           <li> Click on the + to add a task within a column. </li>
           <hr></hr>
           <li> Click on a task and drag to reorder within a column or move to a new column. </li>
           <hr></hr>
           <li> Click on a column and drag to reorder columns. </li>
           <hr></hr>
           <li> Click on the <i className="trash fitted icon"></i> to delete a column. </li>
           <hr></hr>
        </p>
      </Popover.Content>
    </Popover>
  );
// const renderTooltip = () => (
//     <Tooltip id="help-tooltip">
//     Help shows up here
//     </Tooltip>
// )

const Overlay = () => {

    return (
        <div>
        <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={popover}
        >
        <i className="question circle outline icon"></i>
        </OverlayTrigger>
        </div>
    );
}
 
export default Overlay;