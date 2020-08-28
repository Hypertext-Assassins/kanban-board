import React, {Component} from 'react';
import {Popover } from 'react-bootstrap';

class FormOverlay extends Component {
    state = { 
        formData: {task: ""}
     }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleAddCard(this.state.formData)
    } 

    handleChange = (e) => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value}
        this.setState({formData})
    }
    render() { 
        return (
        <Popover id="popover-basic">
        <Popover.Title as="h3">Add New</Popover.Title>
        <Popover.Content>
        <form onSubmit={this.handleSubmit}>
        <input
            placeholder='enter your task here'
            name="task"
            onChange={this.handleChange}
        ></input>
        <button type="submit">Submit</button>
        </form>
        </Popover.Content>
        </Popover>
        );
    }
}
 
export default FormOverlay;




