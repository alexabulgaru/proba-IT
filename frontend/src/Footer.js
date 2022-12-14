import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from "react";
import "./Footer.css";

export default function Footer() {
    const insta = require('./insta.png');
    const twitch = require('./twitch.png');
    const fb = require('./fb.png');
    let url1="https://www.instagram.com/lsacbucuresti/";
    let url2="https://www.twitch.tv/lsac_bucuresti";
    let url3="https://www.facebook.com/LsacBucuresti/";
    return (
        <div className="main">
            <div className="social-media">
                <Row>
                    <Col><a href={url1}> <img src={insta}/> </a></Col>
                    <Col><a href={url2}><img src={twitch}/></a></Col>
                    <Col><a href={url3}><img src={fb}/></a></Col>
                </Row>
            </div>
           <p>Copyright 2022 | La muncă, nu la întins mâna.</p>
        </div>
    );
}