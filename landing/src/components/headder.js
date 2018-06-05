import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
//css
import './css/firstsection.css';
class Headder extends Component {
    render() {
        return (
            <div className="pageone">

                <Grid fluid>
                <div className="dotmetacontainer">
                    <Row className="show-grid text-center">
                        <Col xs={12} md={12} lg={12} className="person-wrapper">
                            <div className="blackcontainer">
                                <h1 id='sitetitle'> Create videos that adapt to <br/>each viewer</h1>
                                <p id="sitedescription">A happy cloud. There we go. 
                                God gave you this gift of imagination. 
                                Use it. We'll do another happy little painting.
                                 Nothing wrong with washing your brush. Yo
                                 u could sit here for weeks with your one ha
                                 ir brush trying to do that - or you could do it with one stroke with an almighty brush.
                    </p>
                                
                            
                            <div id="buttoncontainer">
                            <Link to="/join">
                                    <Button id="signupbutton" >SIGN UP HERE </Button>
                                </Link>
                                </div>
                                
                                </div>
                            </Col>
                    
                        
                        </Row>
                        </div>
                </Grid>
            </div>
        );
    }
}
export default Headder;