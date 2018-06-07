import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
//css
import './css/lastsection.css';
//icons

import net1 from '../net1.svg';
import net2 from '../net2.svg';
import net3 from '../net3.svg';
class Footter extends Component {
    render() {
        return (
            <div className="lastpage">
            
            <div className="footer">
                <Grid fluid>
                    <div className="blackblock">
                    <Row >
                        <Col xs={12} md={6} lg={6} className="left-section">
                            <h1 id='proj-title'> Create your video now</h1>
                        </Col>
                        <Col xs={12} md={6} lg={6} className="person-wrapper">
                            <div className="right-section">
                                <div id="high">
                                    <p id="proj-info">Our beta program is now open to try out.
                                        Enter your email below to get started!  </p>
                                </div>
                                <div id="mid">
                                    <input id="emailinput" name="name" type="email" placeholder="you@Superstar.com" />
                                </div>
                                <div id="low">
                                    {/* <Link to="/join"> */}
                                        <Button id="submit-btn" >SIGN ME UP </Button>
                                    {/* </Link> */}
                                </div>
                            </div>
                        </Col>
                        {/* <Col xs={12} md={2} lg={2} className="Emptyy">
                            <div id="cleanspace"></div>
                            </Col> */}
                    </Row>
                       </div>
                </Grid>
                
                </div>    
                                <div id="socialnet">
                                <img id="sociallink" src={net1} alt="facebook" />
                                <img id="sociallink" src={net2} alt="twitter" />
                                <img id="sociallink" src={net3} alt="instagram" />
                                
                                 </div>
            </div>
        );
    }
}
export default Footter;