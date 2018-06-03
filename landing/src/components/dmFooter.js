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
            <div id="mainf">

                <Grid>
                    <Row id="pallet">
                        <Col xs={12} md={6} lg={6} className="titler">
                            <h1 id='finish'> Create<br /> your <br />video <br />now</h1>
                        </Col>
                        <Col xs={12} md={6} lg={6} className="person-wrapper">
                            <div className="inputs">
                                <div id="high">
                                    <p id="brief">Our beta program is now open to try out.<br />
                                        Enter your email below to get started!  </p>
                                </div>
                                <div id="mid">
                                    <input id="input1" name="name" type="text" placeholder="you@Superstar.com" />
                                </div>
                                <div id="low">
                                    {/* <Link to="/join"> */}
                                        <Button id="signupp" >SIGN ME UP </Button>
                                    {/* </Link> */}
                                </div>
                            </div>
                        </Col>
                        {/* <Col xs={12} md={2} lg={2} className="Emptyy">
                            <div id="cleanspace"></div>
                            </Col> */}
                    </Row>
                            
                </Grid>

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