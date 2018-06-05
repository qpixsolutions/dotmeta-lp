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
            <Grid fluid>
                <div id="pagetwo">
                    <div id="producttitle">
                        <img id="lm" src={require("../media/img/lm.png")} />
                        <h2> Products Features</h2>
                    </div>
                    <div className="container">
                        <Row className="show-grid text-center">
                            <Col xs={12} sm={6} md={4} lg={4} className="person-wrapper">


                                <div className="productelement">
                                    <div id="brand">
                                        <h4>Tailor Content <br /> For Every Viewer</h4>
                                    </div>
                                    <div className="productdescription">
                                        <p id="descriptiontext" >  Customize your audience's viewing experience
                        according  to their location, device,
                                            demographics and more.
                        </p></div>

                                    <Link to="/about">
                                        <img className="productlogo" src={but1} alt="but1" />
                                    </Link>
                                </div>

                            </Col>
                            <Col xs={12} sm={6} md={4} lg={4} className="person-wrapper">



                                <div className="productelement">
                                    <div id="brand">
                                        <h4>A/B Testing <br /> &#38; Analytics</h4>
                                    </div>
                                    <div className="back">
                                        <p id="descriptiontext" >Test out variations of your content and gain more insight about your audience
                        </p>
                                    </div>
                                    <Link to="/about">

                                        <img className="productlogo" src={but2} alt="but2" />
                                    </Link>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={4} lg={4} className="person-wrapper">

                                <div className="productelement">
                                    <div id="brand">
                                        <h4>Amplify Reveneu <br /> Streams</h4>
                                    </div>
                                    <div className="back">
                                        <p id="descriptiontext" > Earn more money than ever
                                            before by customizing product  placement &#38; sponsorships for  every viewer.
                             </p> </div>
                                    <Link to="/about">

                                        <img className="productlogo" src={but3} alt="but3" />
                                    </Link>
                                </div>
                            </Col>

                            <Col xs={12} sm={6} md={4} lg={4} className="person-wrapper">

                                <div className="productelement">
                                    <div id="brand">
                                        <h4>Infinite <br /> Connectivity</h4>
                                    </div>
                                    <div className="back">
                                        <p id="descriptiontext" > Connect your videos to any API or database for endless  customization. </p> </div>
                                    <Link to="/about">

                                        <img className="productlogo" src={but4} alt="but4" />
                                    </Link>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={4} lg={4} className="person-wrapper">
                                <div className="productelement">
                                    <div id="brand">
                                        <h4>Update Videos <br /> After Publishing</h4>
                                    </div>
                                    <div className="back">
                                        <p id="descriptiontext" >Alter or update your video's  scenes after sharing them, even in the middle of a campaign. </p>
                                    </div>
                                    <Link to="/about">

                                        <img className="productlogo" src={but5} alt="but5" />
                                    </Link>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={4} lg={4} className="person-wrapper">

                                <div className="productelement">
                                    <div id="brand">
                                        <h4>Complex Story <br /> Possibilities</h4>
                                    </div>
                                    <div className="back">
                                        <p id="descriptiontext" > Extend your narrative across
                                            platforms and create stories the  like of which the world has never seen.
                            </p></div>
                                    <Link to="/about">

                                        <img className="productlogo" src={but6} alt="but6" />
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