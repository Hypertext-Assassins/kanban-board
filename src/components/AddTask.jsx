import React, {Component} from 'react';
import {Popover } from 'react-bootstrap';

class AddTask extends Component {
    state = { 
        formData: {
            title: "",
            description: ""
        }
     }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleAddCard(this.state.formData, this.props.colName)
        this.props.handleShowForm();
    } 

    // handleChange = (e) => {
    //     this.setState({formData: e.target.value})
    // }
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
            placeholder='enter your task title'
            name="title"
            onChange={this.handleChange}
        ></input>
        <input
            placeholder='enter your task description'
            name="description"
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




