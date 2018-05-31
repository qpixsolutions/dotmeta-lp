import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
//css
import './css/firstsection.css';
class Headder extends Component {
    render() {
        return (
            <div id="maind">

                <Grid>
                    <Row className="show-grid text-center">
                        <Col xs={12} md={10} lg={10} className="person-wrapper">
                            <div id="klam">
                                <h1 id='title'> Create videos to adapt to <br/>each viewer</h1>
                                <p id="lorem">A happy cloud. There we go. God gave you this gift of imagination. Use it. We'll do another happy little painting. Nothing wrong with washing your brush. You could sit here for weeks with your one hair brush trying to do that - or you could do it with one stroke with an almighty brush.
                    
                    It is a lot of fun. Just use the old one inch brush. Trees get lonely too, so we'll give him a little friend. You don't have to be crazy to do this but it does help. Everyone wants to enjoy the good parts - but you have to build the framework first. What the devil.
                                  </p>
                                
                            </div>
                            </Col>
                    </Row>
                            <div id="container">
                            <Link to="/about">
                                    <Button id="up" >SIGN UP HERE </Button>
                                </Link>
                                </div>
                        
                </Grid>
            </div>
        );
    }
}
export default Headder;