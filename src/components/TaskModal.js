import { useState } from 'react';
import { Row, Col, Button, Modal, Form, FloatingLabel } from 'react-bootstrap';
import { Plus, DotsThree } from '@phosphor-icons/react';
import './TaskModal.css';

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
        console.log(today);
        setShow(true);
        if (props.isEdit) {
            setName(props.data.name);
            setDescription(props.data.description);
            setTag(props.data.tag);
            setAssignee(props.data.assignee);
            setPriority(props.data.priority);
            setStatus(props.data.status);
            setDate(props.data.date);
            setEndDate(props.data.endDate);
        } else {
            setName("");
            setDescription("");
            setTag("");
            setAssignee("");
            setPriority("");
            setStatus(props.status);
            setDate(today);
            setEndDate(today);
        }
    }
    const handleSave = () => {
        setShow(false);
        console.log(date);
    }


    return (
        <>
            {
                props.isEdit ?
                <DotsThree className="" size={24} color="#000000" onClick={handleShow} /> :
                <Plus className="" size={24} color="#000000" onClick={handleShow} />
            }

            <Modal className="" show={show} onHide={handleClose} data-bs-theme="dark">
                <Modal.Header closeButton>
                    <Modal.Title className="modTitle">Add Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>

                        <FloatingLabel className="mb-3 inpLabel" controlId="Name" label="Task Name">
                            <Form.Control className="inp" type="text" placeholder="Task Name" value={name} onChange={(e) => setName(e.target.value)}/>
                        </FloatingLabel>

                        <FloatingLabel className="mb-3 inpLabel" controlId="Description" label="Task Description">
                            <Form.Control className="inp descInp" as="textarea" placeholder="Task Description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                        </FloatingLabel>


                        <Row>

                            <Col xs={6}>
                                <FloatingLabel className="mb-3 inpLabel" controlId="Tag" label="Tag">
                                    <Form.Control className="inp" type="text" placeholder="Tag" value={tag} onChange={(e) => setTag(e.target.value)}/>
                                </FloatingLabel>
                            </Col>

                            <Col xs={6}>
                                <FloatingLabel className="mb-3 inpLabel" controlId="Assign" label="Assign To">
                                    <Form.Select className="inp" aria-label="Default select example" value={assignee} onChange={(e) => setAssignee(e.target.value)}>
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
                                    <Form.Select className="inp" aria-label="Default select example" value={priority} onChange={(e) => setPriority(e.target.value)}>
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
                                    <Form.Control className="inp" type="date" placeholder="Start Date" value={date} onChange={(e) => setDate(e.target.value)}/>
                                </FloatingLabel>

                            </Col>

                            <Col xs={6}>

                                <FloatingLabel className="mb-3 inpLabel" controlId="End" label="End">
                                    {/* <Form.Label>End Date</Form.Label> */}
                                    <Form.Control className="inp" type="date" placeholder="End Date" value={endDate} onChange={(e) => setEndDate(e.target.value)}/>
                                </FloatingLabel>

                            </Col>

                        </Row>



                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}