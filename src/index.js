import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.css';
import App from './app';
import { BrowserRouter } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Header from './componets/common/header/header'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Container>

      <BrowserRouter>
        <Header />
        <App />
      </BrowserRouter>

    </Container>
  </React.StrictMode>
)