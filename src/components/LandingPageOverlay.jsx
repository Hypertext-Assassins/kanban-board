import React, { useState } from 'react';
import Dialog from 'react-bootstrap-dialog';
import AriaModal from 'react-aria-modal';
import '../App.css';

class LandingPageOverlay extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        modalActive: true
      };
  
      this.activateModal = this.activateModal.bind(this);
      this.deactivateModal = this.deactivateModal.bind(this);
      this.getApplicationNode = this.getApplicationNode.bind(this);
    }
  
    activateModal = () => {
      this.setState({ modalActive: true });
    };
  
    deactivateModal = () => {
      this.setState({ modalActive: false });
    };
  
    getApplicationNode = () => {
      return document.getElementById('application');
    };
  
    render() {
      const modal = this.state.modalActive
        ? <AriaModal
            titleText="demo one"
            onExit={this.deactivateModal}
            initialFocus="#demo-one-deactivate"
            getApplicationNode={this.getApplicationNode}
            underlayStyle={{ paddingTop: '2em' }}
          >
            <div>
              <div className="overlay">
                <h5>Welcome to the Hypertext Assasins' Kanban Board Project! </h5>
                <p>Start by creating your own columns and tasks, then move your items from column to column as you progress through your lists.</p>
                <p> If you need help, click on the ? for assistance. </p>
                <p>This project was created for Mintbean's Javascript Bootcamp Olympics Hackathon. Check out the footer for more information about the people that created this site.</p>
                <button id="exit" onClick={this.deactivateModal}>
                  x
                </button>
              </div>
              <footer className="modal-footer">
              </footer>
            </div>
          </AriaModal>
        : false;
  
      return (
        <div>
          {modal}
        </div>
      );
    }
  }

  export default LandingPageOverlay;