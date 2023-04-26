import { useState } from 'react';
import React from 'react'
import TaskModal from './TaskModal'
import Button from 'react-bootstrap/Button';

export default function HomePage() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
        <>
            <div>HomePage</div>
            <TaskModal status="To-Do"/>
            <TaskModal status="In-Prog"/>
            <TaskModal isEdit={true} data={data}/>
        </>
    )
}
