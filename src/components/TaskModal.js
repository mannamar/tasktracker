import { useState } from 'react';
import { Row, Col, Button, Modal, Form, FloatingLabel } from 'react-bootstrap';
import { Plus, DotsThree } from '@phosphor-icons/react';
import './TaskModal.css';
import { addTask, updateTask } from '../services/taskService';

export default function TaskModal(props) {

    const [show, setShow] = useState(false);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [assignee, setAssignee] = useState("");
    const [tag, setTag] = useState("");
    const [priority, setPriority] = useState("");
    const [status, setStatus] = useState("");
    const [date, setDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => {

        let today = new Date().toISOString().split('T')[0];
        setShow(true);
        if (props.isEdit) {
            setName(props.data.taskName);
            setDescription(props.data.description);
            setTag(props.data.tags);
            setAssignee(props.data.assigned);
            setPriority(props.data.priority);
            setStatus(props.data.isCompleted);
            setDate(props.data.date);
            setEndDate(props.data.endDate);
        } else {
            setName("");
            setDescription("");
            setTag("");
            setAssignee("");
            setPriority("Low");
            setStatus(props.status);
            setDate(today);
            setEndDate(today);
        }
    }

    const handleSave = async () => {
        if (name) {
            const item = {
                "id" : 0,
                "TaskName" : name,
                "UserID" : "1",
                "PublisherName" : "An",
                "Description" : description,
                "Date" : date,
                "Priority" : priority,
                "Assigned" : assignee,
                "IsCompleted" : status,
                "IsDeleted" : false,
                "EndDate" : endDate,
                "isAdded" : true,
                "Tags" : tag
            }
            console.log(item);
            handleClose();
            let result = false;
            if (props.isEdit) {

            } else {
                console.log('Adding task');
                result = await addTask(item);
            }
            if (result) {

            } else {
                alert(`Blog Items was not ${props.isEdit ? 'Updated' : 'Added'}`)
            }
        }
    }


    return (
        <>
            {
                props.isEdit ?
                    <DotsThree className="taskBtn " size={24} color="#FFFFFF" onClick={handleShow} /> :
                    <Plus className={props.isAdmin ? "taskBtn" : "d-none"} size={24} color="#FFFFFF" onClick={handleShow} />
            }

            <Modal className="" show={show} onHide={handleClose} data-bs-theme="dark">
                <Modal.Header closeButton>
                    <Modal.Title className="modTitle">{props.isEdit ? "Edit" : "Add"} Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>

                        <FloatingLabel className="mb-3 inpLabel" controlId="Name" label="Task Name">
                            <Form.Control disabled={!props.isAdmin} className="inp" type="text" placeholder="Task Name" value={name} onChange={(e) => setName(e.target.value)} />
                        </FloatingLabel>

                        <FloatingLabel className="mb-3 inpLabel" controlId="Description" label="Task Description">
                            <Form.Control disabled={!props.isAdmin} className="inp descInp" as="textarea" placeholder="Task Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                        </FloatingLabel>


                        <Row>

                            <Col xs={6}>
                                <FloatingLabel className="mb-3 inpLabel" controlId="Tag" label="Tag">
                                    <Form.Control disabled={!props.isAdmin} className="inp" type="text" placeholder="Tag" value={tag} onChange={(e) => setTag(e.target.value)} />
                                </FloatingLabel>
                            </Col>

                            <Col xs={6}>
                                <FloatingLabel className="mb-3 inpLabel" controlId="Assign" label="Assign To">
                                    <Form.Select disabled={!props.isAdmin} className="inp" aria-label="Default select example" value={assignee} onChange={(e) => setAssignee(e.target.value)}>
                                        <option value="">Unassigned</option>
                                        <option value="Dan">Dan</option>
                                        <option value="John">John</option>
                                        <option value="Lerissa">Lerissa</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Col>

                        </Row>

                        <Row>

                            <Col xs={6}>

                                <FloatingLabel className="mb-3 inpLabel" controlId="Priority" label="Priority">
                                    <Form.Select disabled={!props.isAdmin} className="inp" aria-label="Default select example" value={priority} onChange={(e) => setPriority(e.target.value)}>
                                        {/* <option>Priority</option> */}
                                        <option value="Low">Low</option>
                                        <option value="Med">Med</option>
                                        <option value="High">High</option>
                                    </Form.Select>
                                </FloatingLabel>

                            </Col>

                            <Col xs={6}>

                                <FloatingLabel className="mb-3 inpLabel" controlId="Status" label="Status">
                                    <Form.Select className="inp" aria-label="Default select example" value={status} onChange={(e) => setStatus(e.target.value)}>
                                        {/* <option>Category</option> */}
                                        <option value="To-do">To-Do</option>
                                        <option value="In-Prog">In-Prog</option>
                                        <option value="Done">Done</option>
                                    </Form.Select>
                                </FloatingLabel>

                            </Col>

                        </Row>

                        <Row>

                            <Col xs={6}>

                                <FloatingLabel className="mb-3 inpLabel" controlId="Start" label="Start">
                                    {/* <Form.Label>Start Date</Form.Label> */}
                                    <Form.Control disabled={!props.isAdmin} className="inp" type="date" placeholder="Start Date" value={date} onChange={(e) => setDate(e.target.value)} />
                                </FloatingLabel>

                            </Col>

                            <Col xs={6}>

                                <FloatingLabel className="mb-3 inpLabel" controlId="End" label="End">
                                    {/* <Form.Label>End Date</Form.Label> */}
                                    <Form.Control disabled={!props.isAdmin} className="inp" type="date" placeholder="End Date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                                </FloatingLabel>

                            </Col>

                        </Row>



                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <button className={(props.isEdit && props.isAdmin) ? "delBtn" : "d-none"} variant="secondary" onClick={handleClose}>
                        Delete
                    </button>
                    <button className="addBtn" variant="primary" onClick={handleSave}>
                        {props.isEdit ? "Save Changes" : "Add Task"}
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}