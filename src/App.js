import React, { Component } from 'react';
import Header from './components/Header/Header';
import {Grid, Col, Panel } from 'react-bootstrap';
import './App.css';

var FontAwesome = require('react-fontawesome');

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="menu-tiles">
          <Grid>
            <Col sm={12} md={6}>
              <Panel>
                <h3>View drives by date</h3>
                <FontAwesome name="calendar" size='4x'/>
              </Panel>
            </Col>
            <Col sm={12} md={6}>
              <Panel>
                <h3>View drives by house</h3>
                <FontAwesome name="home" size="4x"/>
              </Panel>
            </Col>
            <Col sm={12}>
              <Panel className="add-panel">
                <h3>Add drive</h3>
                <FontAwesome name="plus-square" size="4x" />  
              </Panel>
            </Col>
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;
