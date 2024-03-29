import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
//my css

import './css/about.css';
class Abbout extends Component {
    render() {
        return (
            <div id="mainsec">

                <Grid>
                    <Row className="show-grid text-center">

                        <Col xs={12} md={4} lg={4} className="list">
                            <div id="leftsection">

                                <img id="lm" src={require("../media/img/lm.png")} />
                                <h1 id="heading"> How it works? </h1>

                                <dl id="points">
                                    <dt id="major">01</dt>     <dd id="point">Upload different clips for each possible scene in your video</dd>
                                    <dt id="blank">_</dt> <dd id="blank">_</dd>
                                    <dt id="major">02</dt> < dd id="point">Set conditions for when and for who each scene will appear</dd>
                                    <dt id="blank">_</dt> <dd id="blank">_</dd>
                                    <dt id="major">03</dt>  <dd id="point"> Share your video with the world!</dd>
                                </dl>
                            </div>
                        </Col>
                        <Col xs={12} md={8} lg={8} className="image">

                        </Col>

                    </Row>


                </Grid>
            </div>
        );
    }
}
export default Abbout;