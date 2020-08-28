import React, {Component} from 'react';
import {Popover } from 'react-bootstrap';

class AddTask extends Component {
    state = { 
        formData: ""
     }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleAddCard(this.state.formData, this.props.cardType)
    } 

    handleChange = (e) => {
        this.setState({formData: e.target.value})
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
 
export default AddTask;




