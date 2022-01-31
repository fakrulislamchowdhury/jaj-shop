import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { _id, img, title, brand, price, detail } = props.service;   // destructuring in service components
    return (
        <Container>
            <div className='service px-4'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            Band: {brand}
                        </Card.Text>
                        <Card.Text>
                            Price: ${price}
                        </Card.Text>
                        <Card.Text>
                            Price: {detail}
                        </Card.Text>
                        <Link to={`/booking/${_id}`}><button type="button" className="btn btn-primary">Details...</button></Link>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    );
};

export default Service;