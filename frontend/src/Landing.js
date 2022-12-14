import React, { useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FileUploader } from 'react-drag-drop-files';
import './Landing.css';

const fileTypes = ["PNG", "JPG", "JPEG", "GIF"];

export default function Landing () {
    const salty = require('./salty.png');
    const meme1 = require('./meme1.png');
    const meme2 = require('./meme2.png');
    const meme3 = require('./meme3.png');
    const handleClickScroll = () => {
        const element = document.getElementById('exampleForm.ControlInput2');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth'});
        }
    }
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        setFile(file);
    };
    return (
        <Row>
            <Col> 
                <div className="text">
                    <h1>Partajarea de meme-uri nu a fost niciodată mai simplă!</h1>
                    <p>Platforma ideală pentru studenții de la Politehnică, amuzați de câte materii o să pice semnestrul ăsta.</p>
                    <button className="Button" onClick={handleClickScroll}>Upload a MEME</button>
                </div>
            </Col>
            <Col> 
                <div className="Imagine">
                    <img src={salty}/> 
                </div>
            </Col>
            <div class="w-100"></div>
            <div className="background">
                <Row>
                    <Col>
                        <div className="text1">
                            <h2>Ai tupeu și crezi că ești amuzant?</h2>
                            <p>Trimite-ne un mail și poate ai noroc să ne apuce râsul când îți vedem meme-ul.</p>
                        </div>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                <Form.Label>Descriere</Form.Label>
                                <Form.Control
                                    type="descriere"
                                    placeholder="descriere"
                                    autoFocus
                                />
                            </Form.Group>
                        </Form>
                        <Form>
                            <Form.Group className="mb-4" controlId="exampleForm.ControlInput2">
                                <Form.Label>Meme(jpg, jpeg, png, gif)</Form.Label>
                                <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
                            </Form.Group>
                        </Form>
                        <Button className="Button">Trimite</Button>
                    </Col>
                </Row>
            </div>
            <div className="subtitlu">
                <h2>Most Viewed</h2>
            </div>
            <Col>
                <div className="memes">
                    <img src={meme1}/>
                </div>
            </Col>
            <Col>
                <div className="memes">
                    <img src={meme2}/>
                </div>
            </Col>
            <Col>
                <div className="memes">
                    <img src={meme3}/>
                </div>
            </Col>
            
        </Row>
    );
}