import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './Header.css';

export default function Header() {
    const home = require('./home.png');
    let [openA,setopenA] = useState(false);
    let [openB,setopenB] = useState(false);
    const handlePopupA = () => {
        setopenA(true);
    };
    const handleCloseA = () => {
        setopenA(false);
    };
    const handlePopupB = () => {
        setopenB(true);
    };
    const handleCloseB = () => {
        setopenB(false);
    };
    return (
        <>
        <Navbar bg="white" expand="lg" className="fixed-nav-bar">
            <Container>
                <Navbar.Brand href="#home"> <img src={home}/> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />    
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link onClick={handlePopupA}>Logare</Nav.Link>
                        <Nav.Link onClick={handlePopupB}>Creare cont</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Modal show={openA} onHide={handleCloseA}>
            <Modal.Header closeButton>
                <Modal.Title> <img src={home}/> </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Modal.Body>
                <div className="general">
                    <div className="titlu">
                        <h>Welcome back</h>
                    </div>
                    <div className="container">
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    type="username"
                                    placeholder="username"
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Parolă</Form.Label>
                                <Form.Control
                                    type="parolă"
                                    placeholder="parolă"
                                    autoFocus
                                />
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button className="Button" onClick={handleCloseA}>
                Logare
                </Button>
            </Modal.Footer>
            </Modal.Body>
        </Modal>
        <Modal show={openB} onHide={handleCloseB}>
            <Modal.Header closeButton>
                <Modal.Title> <img src={home}/> </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="general">
                    <div className="titlu">
                        <h>Welcome</h>
                    </div>
                    <div className="container">
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    type="username"
                                    placeholder="username"
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="email"
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Parolă</Form.Label>
                                <Form.Control
                                    type="parolă"
                                    placeholder="parolă"
                                    autoFocus
                                />
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button className="Button" onClick={handleCloseB}>
                Creare cont
                </Button>
            </Modal.Footer>
        </Modal>
    </>
    );
}
