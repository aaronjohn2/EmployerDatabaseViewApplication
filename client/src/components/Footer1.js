import React, { Component } from 'react';
import { Col, Container, Row, Footer } from "mdbreact";
import './Home.css';

class Footer1 extends Component {
    render() {
        return (
            <Footer color="green" className="font-small pt-4 mt-4" >
                <Container fluid className="text-center text-md-left">
                    <Row>
                        <Col md="6">
                            <h5 className="title">CMPE 172 Final Project</h5>
                            <p>

                            </p>
                        </Col>
                        <Col md="6">
                            <h5> Team Members: </h5>
                            <ul>
                                <li className="list-unstyled" >
                                    <h5> Nikita, Raghav, Sam, Aaron, Tahsin</h5>
                                </li>

                            </ul>
                        </Col>
                    </Row>
                </Container>
                <div className="footer-copyright text-center py-3">
                    <Container fluid>
                        &copy; {new Date().getFullYear()} Copyright:{" "}
                        <p> CMPE 172 Spartan Developer </p>
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default Footer1;