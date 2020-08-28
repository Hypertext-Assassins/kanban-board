import React, {Component} from 'react';
import {Popover } from 'react-bootstrap';

class FormOverlay extends Component {
    state = { 
        formData: ''
     }
    render() { 
        return (
        <Popover id="popover-basic">
        <Popover.Title as="h3">Add New</Popover.Title>
        <Popover.Content>
        <form onSubmit={this.props.addCard}>
        <input
            placeholder='enter your task here'
        ></input>
        </form>
        </Popover.Content>
        </Popover>
        );
    }
}
 
export default FormOverlay;




