import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./HomePage.css"
import { Container, Row, Card } from 'react-bootstrap';
import TaskModal from './TaskModal'
import { Link } from 'react-router-dom';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
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
            id: 1,
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
            id: 2,
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
            id: 3,
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
            id: 4,
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
            id: 5,
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
            id: 6,
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

    let isAdmin = true;

    const onDragEnd = result => {
        const { destination, source, draggableId } = result;

        if (!destination) {
            return;
        }

        if (destination.droppableId === source.droppableId) {
            return;
        }
        let taskIndex = seedData.findIndex(item => item.id === Number(draggableId));
        console.log(taskIndex);
        console.log("Moved to ", destination.droppableId);
        seedData[taskIndex].status = destination.droppableId;
    }

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
                    <DragDropContext onDragEnd={onDragEnd}>

                        <Card className="md-col-4">
                            <Card.Header className="to-do">To Do . . .
                                <TaskModal status="To-Do" isAdmin={isAdmin}/>
                            </Card.Header>

                            <Droppable droppableId="To-Do">
                                {(provided) => (
                                    <Card.Body
                                        ref={provided.innerRef}
                                        {...provided.droppableProps}
                                    >
                                        {seedData.filter(task => task.status === "To-Do").map((task, index) => {
                                            return (
                                                <TaskCard task={task} index={index} key={task.id} isAdmin={isAdmin}/>
                                            )
                                        })}
                                        {provided.placeholder}
                                    </Card.Body>
                                )}
                            </Droppable>



                        </Card>
                        <Card className="md-col-4">
                            <Card.Header className="to-do">In Progress . . .
                                <TaskModal status="In-Prog" isAdmin={isAdmin}/>
                            </Card.Header>

                            <Droppable droppableId="In-Prog">
                                {(provided) => (
                                    <Card.Body
                                        ref={provided.innerRef}
                                        {...provided.droppableProps}
                                    >
                                        {seedData.filter(task => task.status === "In-Prog").map((task, index) => {
                                            return (
                                                <TaskCard task={task} index={index} key={task.id} isAdmin={isAdmin}/>
                                            )
                                        })}
                                        {provided.placeholder}
                                    </Card.Body>
                                )}
                            </Droppable>

                        </Card>
                        <Card className="md-col-4">
                            <Card.Header className="to-do">Done . . .
                                <TaskModal status="Done" isAdmin={isAdmin}/>
                            </Card.Header>

                            <Droppable droppableId="Done">
                                {(provided) => (
                                    <Card.Body
                                        ref={provided.innerRef}
                                        {...provided.droppableProps}
                                    >
                                        {seedData.filter(task => task.status === "Done").map((task, index) => {
                                            return (
                                                <TaskCard task={task} index={index} key={task.id} isAdmin={isAdmin}/>
                                            )
                                        })}
                                        {provided.placeholder}
                                    </Card.Body>
                                )}
                            </Droppable>

                        </Card>

                    </DragDropContext>
                </Row>
            </Container>
        </div>
    )
}
