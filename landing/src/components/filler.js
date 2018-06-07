import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
//css
import './css/extrasection.css';
class Filler extends Component {
    constructor(props){
        super(props)
      }
    render() {
        return (<div className={this.props.productfiller}>

        </div>
        );
    }
}
export default Filler;
