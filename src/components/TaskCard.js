import React from 'react';
import { Card } from 'react-bootstrap';
import TaskModal from './TaskModal';
import { Draggable } from 'react-beautiful-dnd';

export default function TaskCard(props) {
    return (
        <Draggable draggableId={String(props.task.id)} index={props.index}>
            {provided => (
                <Card className="task-card"
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}>
                    <Card.Body className="task-card d-flex justify-content-between">
                        <span className="taskTxt">{props.task.taskName}</span>
                        <TaskModal isEdit={true} data={props.task} isAdmin={props.isAdmin}/>
                    </Card.Body>
                </Card>
            )}
        </Draggable>
    )
}
