import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./HomePage.css"
import { Container, Row, Card } from 'react-bootstrap';
import TaskModal from './TaskModal'
import { Link } from 'react-router-dom';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import TaskCard from './TaskCard';
import { getAllTasks, getTaskItemById, updateTask } from '../services/taskService';
import { useNavigate } from 'react-router-dom';


export default function HomePage() {
    const [taskItems, setTaskItems] = useState([]);
    const [needsRefresh, setNeedsRefresh] = useState(true);
    // const [userInfo, setUserInfo] = useState({});

    let navigate = useNavigate();

    let userInfo = JSON.parse(localStorage.getItem('userInfo'));
    let isAdmin = (userInfo && userInfo.isAdmin) ? userInfo.isAdmin : false;

    useEffect(() => {
        const fetchData = async () => {
            let res = await getAllTasks();
            setTaskItems(res);
            console.log(res);
        };
        fetchData();
    }, [needsRefresh])

    useEffect(() => {
        if(userInfo === null) {
            // setUserInfo({isAdmin: false});
            navigate('/Login');
        } 
    }, []);

    // useEffect(() => {
    //     console.log(userInfo);
    //     if (userInfo == {}) {
    //         setUserInfo({isAdmin: false});
    //         navigate('/Login');
    //     }
    // }, [userInfo]);

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
        }
    ]


    const onDragEnd = async (result) => {
        const { destination, source, draggableId } = result;

        if (!destination) {
            return;
        }

        if (destination.droppableId === source.droppableId) {
            return;
        }
        let taskIndex = taskItems.findIndex(item => item.id === Number(draggableId));
        console.log(taskIndex);
        console.log("Moved to ", destination.droppableId);
        let task = taskItems[taskIndex];
        console.log(task);
        task.isCompleted = destination.droppableId;
        [taskIndex].status = destination.droppableId;
        let updatedTasks = taskItems.slice();
        updatedTasks.splice(taskIndex, 1, task);
        setTaskItems(updatedTasks); // Slow

        // taskItems[taskIndex].status = destination.droppableId;

        let response = await updateTask(task);
        if (response) {
            // let res = await getAllTasks();
            // setTaskItems(res);
        }
        // seedData[taskIndex].status = destination.droppableId;
        // Need to add logic for drag to new category
    }

    function logOut() {
        localStorage.removeItem('userInfo');
    }

    return (
        <div>
            <nav className="navbar nav-bg ">
                <div className="container-fluid">
                    <span className="nav-title mb-0 h1">Task Tracker</span>
                    <Link to='/Login'>
                        <button type="button" className="btn-bg " onClick={logOut}>Log Out</button>
                    </Link>
                </div>
            </nav>

            <Container>
                <Row className="field-spacing">
                    <DragDropContext onDragEnd={onDragEnd}>

                        <Card className="md-col-4">
                            <Card.Header className="to-do">To Do . . .
                                <TaskModal status="To-Do" isAdmin={isAdmin} bool={needsRefresh} setBool={setNeedsRefresh}/>
                            </Card.Header>

                            <Droppable droppableId="To-Do">
                                {(provided) => (
                                    <Card.Body
                                        ref={provided.innerRef}
                                        {...provided.droppableProps}
                                    >
                                        {taskItems.filter(task => task.isCompleted === "To-Do").filter(task => task.isDeleted === false).map((task, index) => {
                                            return (
                                                <TaskCard task={task} index={index} key={task.id} isAdmin={userInfo.isAdmin} bool={needsRefresh} setBool={setNeedsRefresh}/>
                                            )
                                        })}
                                        {provided.placeholder}
                                    </Card.Body>
                                )}
                            </Droppable>



                        </Card>
                        <Card className="md-col-4">
                            <Card.Header className="to-do">In Progress . . .
                                <TaskModal status="In-Prog" isAdmin={isAdmin} bool={needsRefresh} setBool={setNeedsRefresh}/>
                            </Card.Header>

                            <Droppable droppableId="In-Prog">
                                {(provided) => (
                                    <Card.Body
                                        ref={provided.innerRef}
                                        {...provided.droppableProps}
                                    >
                                        {taskItems.filter(task => task.isCompleted === "In-Prog").filter(task => task.isDeleted === false).map((task, index) => {
                                            return (
                                                <TaskCard task={task} index={index} key={task.id} isAdmin={userInfo.isAdmin} bool={needsRefresh} setBool={setNeedsRefresh}/>
                                            )
                                        })}
                                        {provided.placeholder}
                                    </Card.Body>
                                )}
                            </Droppable>

                        </Card>
                        <Card className="md-col-4">
                            <Card.Header className="to-do">Done . . .
                                <TaskModal status="Done" isAdmin={isAdmin} bool={needsRefresh} setBool={setNeedsRefresh}/>
                            </Card.Header>

                            <Droppable droppableId="Done">
                                {(provided) => (
                                    <Card.Body
                                        ref={provided.innerRef}
                                        {...provided.droppableProps}
                                    >
                                        {taskItems.filter(task => task.isCompleted === "Done").filter(task => task.isDeleted === false).map((task, index) => {
                                            return (
                                                <TaskCard task={task} index={index} key={task.id} isAdmin={userInfo.isAdmin} bool={needsRefresh} setBool={setNeedsRefresh}/>
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
