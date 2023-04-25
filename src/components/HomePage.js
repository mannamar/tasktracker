import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./HomePage.css"
import { Container, Row, Col, Card } from 'react-bootstrap';
import plus from "../Assets/Plus.png";

export default function HomePage() {
    return (
        <div>
            <nav className="navbar nav-bg ">
                <div className="container-fluid">
                    <span className="nav-title mb-0 h1">Task Tracker</span>
                    <button type="button" className="btn-bg ">Log Out</button>
                </div>
            </nav>

            <Container>
                <Row className="field-spacing">
                    <Card className="md-col-4"> 
                        <Card.Header className="to-do">To Do . . .
                        <img className="plus" src={plus} />
                        </Card.Header>
                        <Card.Body>This is some text within a card body.</Card.Body>
                        
                    </Card>
                    <Card className="md-col-4">
                        <Card.Header className="to-do">In Progress . . .
                        <img className="plus" src={plus} />
                        </Card.Header>
                        <Card.Body>This is some text within a card body.</Card.Body>
                    </Card>
                    <Card className="md-col-4">
                        <Card.Header className="to-do">Done . . .
                        <img className="plus" src={plus} />
                        </Card.Header>
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
