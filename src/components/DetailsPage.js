import React from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import carImg from '../assets/images/car.png';
import ReserveCar from './ReserveCar';
import '../styles/carDetails.css';

const DetailsPage = () => (
  <Container className="details-container">
    <div>
      <Card className="img-container">
        <Card.Img variant="top" src={carImg} alt="car image" />
      </Card>
      <Card className="car-features">
        <Card.Header>
          <h2>Car s Model</h2>
          <em>Price deposit upon any car purchase</em>
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <p className="key">Finance fee</p>
            <p className="value">123</p>
          </ListGroup.Item>
          <ListGroup.Item>
            <p className="key">Option to purchase fee</p>
            <p className="value">123</p>
          </ListGroup.Item>
          <ListGroup.Item>
            <p className="key">amount payable</p>
            <p className="value">1234</p>
          </ListGroup.Item>
          <ListGroup.Item>
            <p className="key">Duration</p>
            <p className="value">1234</p>
          </ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Text>
            <strong>5.9% APR</strong>
            {' '}
            Representative
          </Card.Text>
          <div className="links">
            <div>
              <Link to="/">
                DISCOVER MORE MODELS
                <i className="bi bi-chevron-compact-right" />
              </Link>
              <strong>Image</strong>
            </div>
            <ReserveCar/>
          </div>
        </Card.Body>
      </Card>
    </div>
    <Link
      to="/"
      className="link-back"
    >
      <i className="bi bi-caret-left" />
    </Link>
  </Container>
);

export default DetailsPage;
