import React from 'react';
import '../App.css';


const Footer = () => {
    return ( 
        <div className="footer-container">
            <div className="footer-div">
                <footer className="page-footer">
                    <div id="footer-title" className="header">This project was created by:</div>
                    <div role="list" className="ui horizontal list" id="footer-content">
                        <div role="listitem" className="item">
                            <div className="content" id="footer-content">
                                <div className="header">
                                    Crystal Vasquez
                                </div>
                                <div className="align-links">
                                    <a href="https://github.com/crystallynnv"><i className="github large icon"></i></a>
                                    <a href="https://www.linkedin.com/in/crystal-lynn-vasquez/"><i className="linkedin icon large"></i></a>
                                </div>
                            </div>
                        </div>
                        <div role="listitem" className="item">
                            <div className="content" id="footer-content">
                                <div className="header">
                                    Skylar Wong
                                </div>
                                <div className="align-links">
                                    <a href="https://github.com/skylarw19"><i className="github large icon"></i></a>
                                    <a href="https://www.linkedin.com/in/skylar-wong/"><i className="linkedin icon large"></i></a>
                                </div>
                            </div>
                        </div>
                        <div role="listitem" className="item">
                            <div className="content" id="footer-content">
                                <div className="header">
                                    Alanna Celentano
                                </div>
                                <div className="align-links">
                                    <a href="https://github.com/celentanoad"><i className="github large icon"></i></a>
                                    <a href="https://www.linkedin.com/in/alanna-celentano/"><i className="linkedin icon large"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-info">
                        <div>Click <a className="footer-info" id="link" href="https://github.com/Hypertext-Assassins/kanban-board">here</a> to view the source code for this project</div>
                        <div>Learn more about Mintbean's hackathons at <a className="footer-info" id="link" href="https://mintbean.io/">Mintbean.io</a></div>
                    </div>
                </footer>
            </div>
        </div>
     );
}
 
export default Footer;

