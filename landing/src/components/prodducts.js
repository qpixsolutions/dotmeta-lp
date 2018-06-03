import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
//my css
import './css/products.css';
//svg icons
import but1 from '../but1.svg';
import but2 from '../but2.svg';
import but3 from '../but3.svg';
import but4 from '../but4.svg';
import but5 from '../but5.svg';
import but6 from '../but6.svg';

class Prodducts extends Component {
    render() {
        return (
            <Grid>
                <div id="whitespace">
                    <div id="producttitle">
                        <img id="lm" src={require("../media/img/lm.png")} />
                        <h2> Products Features</h2>
                    </div>
                    <div className="product">
                        <Row className="show-grid text-center">
                            <Col xs={12} md={4} lg={4} className="person-wrapper">


                                <div className="card">
                                    <div id="brand">
                                        <h4>Tailor Content <br /> For Every Viewer</h4>
                                    </div>
                                    <div className="back">
                                        <p id="but1" >  Customize your audience's<br /> viewing experience
                        according <br /> to their location, device, <br />
                                            demographics and more.
                        </p></div>

                                    <Link to="/about">
                                        <img className="front" src={but1} alt="but1" />
                                    </Link>
                                </div>

                            </Col>
                            <Col xs={12} md={4} lg={4} className="person-wrapper">



                                <div className="card">
                                    <div id="brand">
                                        <h4>A/B Testing <br /> &#38; Analytics</h4>
                                    </div>
                                    <div className="back">
                                        <p id="but2" >Test out variations of your<br /> content and gain more insight <br /> about your audience
                        </p>
                                    </div>
                                    <Link to="/about">

                                        <img className="front" src={but2} alt="but2" />
                                    </Link>
                                </div>
                            </Col>
                            <Col xs={12} md={4} lg={4} className="person-wrapper">

                                <div className="card">
                                    <div id="brand">
                                        <h4>Amplify Reveneu <br /> Streams</h4>
                                    </div>
                                    <div className="back">
                                        <p id="but3" > Earn more money than ever <br />
                                            before by customizing product <br /> placement &#38; sponsorships for <br /> every viewer.
                             </p> </div>
                                    <Link to="/about">

                                        <img className="front" src={but3} alt="but3" />
                                    </Link>
                                </div>
                            </Col>
                        </Row>

                        <Row className="show-grid text-center">
                            <Col xs={12} md={4} lg={4} className="person-wrapper">

                                <div className="card">
                                    <div id="brand">
                                        <h4>Infinite <br /> Connectivity</h4>
                                    </div>
                                    <div className="back">
                                        <p id="but4" > Connect your videos to any API <br /> or database for endless <br /> customization. </p> </div>
                                    <Link to="/about">

                                        <img className="front" src={but4} alt="but4" />
                                    </Link>
                                </div>
                            </Col>
                            <Col xs={12} md={4} lg={4} className="person-wrapper">
                                <div className="card">
                                    <div id="brand">
                                        <h4>Update Videos <br /> After Publishing</h4>
                                    </div>
                                    <div className="back">
                                        <p id="but5" >Alter or update your video's <br /> scenes after sharing them, even <br /> in the middle of a campaign. </p>
                                    </div>
                                    <Link to="/about">

                                        <img className="front" src={but5} alt="but5" />
                                    </Link>
                                </div>
                            </Col>
                            <Col xs={12} md={4} lg={4} className="person-wrapper">

                                <div className="card">
                                    <div id="brand">
                                        <h4>Complex Story <br /> Possibilities</h4>
                                    </div>
                                    <div className="back">
                                        <p id="but6" > Extend your narrative across<br />
                                            platforms and create stories the <br /> like of which the world has <br /> never seen.
                            </p></div>
                                    <Link to="/about">

                                        <img className="front" src={but6} alt="but6" />
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Grid>
        );

    }
}
export default Prodducts;