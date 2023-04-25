import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./HomePage.css"
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function HomePage() {
    return (
        <div>
            <nav className="navbar nav-bg ">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">Task Tracker</span>
                    <button type="button" className="btn-bg ">Log Out</button>
                </div>
            </nav>

            <Container>
                <Row className="field-spacing">
                    <Card className="md-col-3"> 
                        <Card.Header className="to-do">To Do . . .</Card.Header>
                        <Card.Body>This is some text within a card body.</Card.Body>
                    </Card>
                    <Card className="md-col-3">
                        <Card.Header className="to-do">To Do . . .</Card.Header>
                        <Card.Body>This is some text within a card body.</Card.Body>
                    </Card>
                    <Card className="md-col-3">
                        <Card.Header className="to-do">To Do . . .</Card.Header>
                        <Card.Body>This is some text within a card body.</Card.Body>
                    </Card>
                    {/* <Col className="to-do">To Do . . . 
                    <Col className="to-do-body">body
                    </Col>
                    </Col>

                    <Col>In Progress . . . 
                    <Col> body
                    </Col>
                    </Col>
                    <Col>Done . . .
                    <Col>Body
                    </Col>
                     </Col> */}
                </Row>
            </Container>
        </div>
    )
}
