import { useState } from 'react';
import React from 'react'
import TaskModal from './TaskModal'
import Button from 'react-bootstrap/Button';

export default function HomePage() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div>HomePage</div>
            <TaskModal />
        </>
    )
}
