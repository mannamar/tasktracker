import { useState } from 'react';
import { Row, Col, Button, Modal, Form, FloatingLabel } from 'react-bootstrap';
import { Plus, DotsThree } from '@phosphor-icons/react';
import './TaskModal.css';

export default function TaskModal() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Plus className="" size={24} color="#000000" onClick={handleShow} />
            <DotsThree className="" size={24} color="#000000" onClick={handleShow} />

            <Modal className="" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="modTitle">Add Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>

                        <Form.Group className="mb-3" controlId="Name">
                            <Form.Control className="inp" type="text" placeholder="Task Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="Description">
                            <Form.Control className="inp descInp" as="textarea" placeholder="Task Description" />
                        </Form.Group>


                        <Row>

                            <Col xs={6}>
                                <Form.Group className="mb-3" controlId="Name">
                                    <Form.Control className="inp" type="text" placeholder="Tag" />
                                </Form.Group>
                            </Col>

                            <Col xs={6}>
                                <Form.Group className="mb-3" controlId="Assign">
                                    <Form.Select className="inp" aria-label="Default select example">
                                        <option>Assign To</option>
                                        <option value="Dan">Dan</option>
                                        <option value="John">John</option>
                                        <option value="Lerissa">Lerissa</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>

                        </Row>
                            
                        <Row>

                            <Col xs={6}>

                                <Form.Group className="mb-3" controlId="Priority">
                                    <Form.Select className="inp" aria-label="Default select example">
                                        <option>Priority</option>
                                        <option value="Sports">Low</option>
                                        <option value="Cats">Med</option>
                                        <option value="Pastas">High</option>
                                    </Form.Select>
                                </Form.Group>
                                
                            </Col>

                            <Col xs={6}>

                                <Form.Group className="mb-3" controlId="Category">
                                    <Form.Select className="inp" aria-label="Default select example">
                                        <option>Category</option>
                                        <option value="Sports">To-Do</option>
                                        <option value="Cats">In-Prog</option>
                                        <option value="Pastas">Done</option>
                                    </Form.Select>
                                </Form.Group>

                            </Col>

                        </Row>

                        <Row>

                            <Col xs={6}>

                                <Form.Group className="mb-3" controlId="Start">
                                    <Form.Label>Start Date</Form.Label>
                                    <Form.Control className="inp" type="date" placeholder="Start Date" />
                                </Form.Group>

                            </Col>

                            <Col xs={6}>

                                <Form.Group className="mb-3" controlId="End">
                                    <Form.Label>End Date</Form.Label>
                                    <Form.Control className="inp" type="date" placeholder="End Date" />
                                </Form.Group>

                            </Col>

                        </Row>



                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}