import React, {useState, useRef } from 'react'
import { Button, Popover, OverlayTrigger } from 'react-bootstrap'

const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">This is a form</Popover.Title>
      <Popover.Content>
        <form>
            <input></input>
        </form>
      </Popover.Content>
    </Popover>
  );
  
  const Example = () => (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <Button variant="success">Click me to see</Button>
    </OverlayTrigger>
  );
    
  
export default Example;