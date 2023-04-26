import { useState } from 'react';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./HomePage.css"
import { Container, Row, Col, Card } from 'react-bootstrap';
import plus from "../Assets/Plus.png";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import TaskModal from './TaskModal'

export default function HomePage() {
    let data = {
        name: "Walk Dog",
        description: "Walk Dog after lunch",
        tag: "Pets",
        assignee: "Lerissa",
        priority: "high",
        status: "In-Prog",
        date: "2023-04-25",
        endDate: "2023-04-26"
    }

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
                        <Card.Body>
                            <Card className="task-card">
                                <Card.Body className="task-card"> This is some text within a card body.
                               
                                </Card.Body>
                            </Card>
                            <Card className="task-card">
                                <Card.Body className="task-card"> This is some text within a card body.</Card.Body>
                            </Card>
                            <Card className="task-card">
                                <Card.Body className="task-card"> This is some text within a card body.</Card.Body>
                            </Card>
                            
                        </Card.Body>
                        

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
                </Row>
            </Container>
        </div>
    )
}
