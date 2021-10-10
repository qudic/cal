import React, { Component } from 'react';
import { Grid, Jumbotron, Col, Row } from 'react-bootstrap';

class Hello extends Component {
  render() {
    return (
    <Grid style={{ marginTop: 10 }}>
        <Row className="show-grid">
            <Col xs={12}>        
                <Jumbotron>
                <h3>VAT Return Simulator</h3>
                <p>Instantly check the VAT that I can get back</p>
              </Jumbotron>
              </Col>
  	    </Row>
    </Grid>
    );
  }
}

export default Hello;


