import React, {Component} from 'react';
import {Popover } from 'react-bootstrap';
import "../App.css";


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

    handleChange = (e) => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value}
        this.setState({formData})
    }
    render() { 
        return (
        <div id="popover-form">
            <form onSubmit={this.handleSubmit}>
            <input
                id="form-input"
                className="ui input large"
                placeholder='title'
                name="title"
                onChange={this.handleChange}>
            </input>
            <br></br>
            <input
                id="form-input"
                className="ui input small"
                placeholder='description'
                name="description"
                onChange={this.handleChange}>    
            </input>
            <hr></hr>
            <button className="ui animated mini teal button" type="submit"><div class="visible content">Submit</div><div class="hidden content"><i aria-hidden="true" className="yellow add circle icon"></i></div></button>
            </form>
        </div>
        );
    }
}
 
export default AddTask;




