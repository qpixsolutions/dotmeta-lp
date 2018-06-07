import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
//my css

import './css/about.css';
class Abbout extends Component {
    render() {
        return (
            <div className="pagethree">

                <Grid fluid>
                    <Row className=" ">

                        <Col xs={12} md={4} lg={4} className="numberpoints">
                            <div id="leftsidesection">

                                <img id="blackrectangle" src={require("../media/img/lm.png")} />
                                <h1 id="heading"> How it works? </h1>

                                <dl id="points">

                                   <div id="point"> <dt id="pointnumber">01</dt> <dd id="point-text"> Upload different clips for each possible scene in your video</dd> </div>

                                     < div id="point">  <dt id="pointnumber">02</dt> <dd id="point-text">Set conditions for when and for who each scene will appear </dd> </div>

                                    <div id="point"> <dt id="pointnumber">03</dt> <dd id="point-text3">Share your video with the world! </dd></div>

                                </dl>
                            </div>
                        </Col>
                        <Col xs={12} md={8} lg={8} >

                        </Col>

                    </Row>


                </Grid>
            </div>
        );
    }
}
export default Abbout;