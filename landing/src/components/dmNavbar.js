 import React, { Component} from 'react';
import { Navbar, Nav, NavItem ,NavDropdown,MenuItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './navb.css';
class Navvbar extends Component {
  constructor(props){
    super(props)
  }
    render() {
        return(
<Navbar>
  <Navbar.Header>
    <Navbar.Brand>
    <a className={this.props.navcolor}href="#"> 
    <img src={require("../media/img/download.png" )} alt="logo" style={{width:90,height:20} } />
    
          </a>
      
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem className={this.props.navClass} eventKey={1} href="">
       Your Name  
       <Image src={require("../media/img/pp.png")} alt="profile picture"  className="profile-pic"/>
         {/* &#9776; */}
    </NavItem>
  
  </Nav>
</Navbar>
                   );
    }
}
export default Navvbar;