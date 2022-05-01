import React from 'react'
import { Alert, Button, Col, Row } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Routing from './routes';

const Main = () => {
    return <>
        <BrowserRouter>
            <Routing />
        </BrowserRouter>
    </>
}

export default Main;