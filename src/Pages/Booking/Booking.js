import './Booking.css';
import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Carousel } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import img1 from '../../img/banner/2.png';
import img2 from '../../img/banner/3.png';
import img3 from '../../img/banner/1.png';


const Booking = () => {
    const { serviceId } = useParams();
    const [details, setDetails] = useState([]);
    const [specificDetail, setSpecificDetail] = useState({});

    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, []);

    useEffect(() => {
        if (details.length > 0) {
            // eslint-disable-next-line eqeqeq
            const matchData = details.find(detail => detail.id == serviceId)
            setSpecificDetail(matchData);
        }
    }, [details, serviceId, specificDetail]);

    return (
        <Container>
            <Carousel fade className='banner-container pb-5 pt-2'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <div>
                <h1>Our Product Detail</h1>
            </div>
            <div className='bottom'>
                <div className='booking animate__animated animate__zoomIn'>
                    <Card style={{ width: '38rem' }}>
                        <Card.Body>
                            <Card.Title>Title: {specificDetail?.title}</Card.Title>
                            <Card.Text>
                                Brand: {specificDetail?.brand}
                            </Card.Text>
                            <Card.Text>
                                Price: ${specificDetail?.price}
                            </Card.Text>
                            <Card.Text>
                                Detail: {specificDetail?.detail}
                            </Card.Text>
                            <Link to="/"><Button variant="primary">Go back</Button></Link>
                        </Card.Body>
                    </Card>
                </div>
            </div >
        </Container>
    );
};

export default Booking;