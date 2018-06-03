import React, { Component} from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import {ScrollToTopOnMount,SectionsContainer, Section, Header, Footer} from 'react-fullpage';
//my components
import Navvbar from './dmNavbar';
import Prodducts from './prodducts.js';
import Headder from './headder.js';
import Footter from './dmFooter.js';
import Abbout from './about.js';
//my css
import './css/lp.css';
//jquery
import $ from 'jquery';

class Landing extends Component {
    
    state = {
      navClass:"dotMetaNavItemWhite",
      navcolor:"lwhite",
    };
    render() {
      let options = {
        activeClass:          'active', // the class that is appended to the sections links
        anchors:              ['sectionOne','sectionTwo','sectionThree','sectionFour'], // the anchors for each sections
        arrowNavigation:      true, // use arrow keys
        className:            'SectionContainer', // the class name for the section container
        delay:                828, // the scroll animation speed
        navigation:           true, // use dots navigatio
        scrollBar:            false, // use the browser default scrollbar
        sectionClassName:     'Section', // the section class name
        sectionPaddingTop:    '0', // the section top padding
        sectionPaddingBottom: '0', // the section bottom padding
        sectionMarginBottom: '50px',
        verticalAlign:        true, // align the content of each section vertical
        scrollCallback:(states) => {
          if(states.activeSection === 1 || states.activeSection === 2 ){
            this.setState({navClass:"dotMetaNavItemBlack"})
            this.setState({navcolor:"lblack"})
            
          } else {
            this.setState({navClass:"dotMetaNavItemWhite"})
            this.setState({navcolor:"lwhite"})
            
          }
        }
      
      };
        return(
            <div>
            <Header>
            <Navvbar navClass={this.state.navClass} navcolor={this.state.navcolor} /> 
          </Header>
        
          <SectionsContainer className="Containner" {...options}>
          <Section className="custom-section"  ><Headder /></Section>
          <Section color="#FFFFFF"><Prodducts /></Section>
          <Section >  <Abbout/></Section>
          <Section ><Footter/></Section>
          </SectionsContainer>
       
        </div>
        );
    }
}
export default Landing;