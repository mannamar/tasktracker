import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./HomePage.css"
import { Container, Row, Col, Card } from 'react-bootstrap';
import TaskModal from './TaskModal'
import { Link } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import TaskCard from './TaskCard';


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

    let seedData = [
        {
            name: "Walk Dog",
            description: "Walk Dog after lunch",
            tag: "Pets",
            assignee: "Lerissa",
            priority: "high",
            status: "In-Prog",
            date: "2023-04-25",
            endDate: "2023-04-26"
        },
        {
            name: "Feed Cat",
            description: "Make sure he gets enough protein",
            tag: "Pets",
            assignee: "Dan",
            priority: "high",
            status: "To-Do",
            date: "2023-04-26",
            endDate: "2023-04-26"
        },
        {
            name: "Practice Guitar",
            description: "Learn that gnarly Hendrix riff",
            tag: "Music",
            assignee: "Lerissa",
            priority: "Med",
            status: "To-Do",
            date: "2023-04-26",
            endDate: "2023-04-26"
        },
        {
            name: "Plan Vacation",
            description: "Figure out if we're going to Hawaii or Tahiti",
            tag: "Vacay",
            assignee: "John",
            priority: "low",
            status: "In-Prog",
            date: "2023-04-26",
            endDate: "2023-04-30"
        },
        {
            name: "Book Flights",
            description: "Make sure everyone gets a window seat",
            tag: "Vacay",
            assignee: "",
            priority: "low",
            status: "To-Do",
            date: "2023-04-26",
            endDate: "2023-05-30"
        },
        {
            name: "Smash Tournament",
            description: "Kick butt and spam down-B",
            tag: "E-Sports",
            assignee: "Dan",
            priority: "low",
            status: "Done",
            date: "2023-03-30",
            endDate: "2023-03-30"
        }
    ]

    return (
            <div>
            <nav className="navbar nav-bg ">
                <div className="container-fluid">
                    <span className="nav-title mb-0 h1">Task Tracker</span>
                    <Link to='/Login'>
                    <button type="button" className="btn-bg ">Log Out</button>
                    </Link>
                </div>
            </nav>

            <Container>
                <Row className="field-spacing">
                    <Card className="md-col-4">
                        <Card.Header className="to-do">To Do . . .
                            <TaskModal status="To-Do"/>
                        </Card.Header>
                        <Card.Body>
                            
                            {seedData.filter(task => task.status === "To-Do").map(task => {
                                return (
                                    <TaskCard task={task}/>
                                )
                            })}
                            
                        </Card.Body>
                        

                    </Card>
                    <Card className="md-col-4">
                        <Card.Header className="to-do">In Progress . . .
                            <TaskModal status="In-Prog"/>
                        </Card.Header>
                        <Card.Body>
                            {seedData.filter(task => task.status === "In-Prog").map(task => {
                                return (
                                    <TaskCard task={task}/>
                                )
                            })}
                        </Card.Body>
                    </Card>
                    <Card className="md-col-4">
                        <Card.Header className="to-do">Done . . .
                            <TaskModal status="Done"/>
                        </Card.Header>
                        <Card.Body>
                            {seedData.filter(task => task.status === "Done").map(task => {
                                return (
                                    <TaskCard task={task}/>
                                )
                            })}
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </div>
    )
}
