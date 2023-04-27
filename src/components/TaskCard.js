import React from 'react';
import { Card } from 'react-bootstrap';
import TaskModal from './TaskModal';

export default function TaskCard(props) {
    return (
        <Card className="task-card">
            <Card.Body className="task-card d-flex justify-content-between">
                <span className="taskTxt">{props.task.name}</span>
                <TaskModal isEdit={true} data={props.task} />
            </Card.Body>
        </Card>
    )
}
