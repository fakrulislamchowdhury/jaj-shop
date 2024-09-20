import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <Container className='bg-secondary text-white'>
            <div className='d-flex item2'>
                <div className='bottom pb-3 me-3'>
                    <div>
                        <h3>About us</h3>
                        <p>Be the first to learn about our latest trends and get exclusive offers!</p>
                    </div>
                    <div className='d-flex align-items-center'>
                        <img src="https://i.ibb.co.com/pZhCgYJ/phone.png" width="18px" alt="" />
                        <h5 className='ps-2'>Phone: </h5>
                        <h6 className='ps-3'><small>01834-959234</small></h6>
                    </div>
                    <div className='d-flex align-items-center'>
                        <img src="https://i.ibb.co.com/RcnP64k/location.png" width="18px" alt="" />
                        <h5 className='ps-2'>Location:</h5>
                        <h6 className='ps-3'><small>House-45, Rd-7, Banani, Dhaka-1212, BD.</small></h6>
                    </div>
                    <div className='d-flex align-items-center'>
                        <img src="https://i.ibb.co.com/y41r07r/gmail.png" width="20px" height="20px" alt="" />
                        <h5 className='ps-2'>Email:</h5>
                        <h6 className='ps-3'><small>info@jaj-shop.com.bd</small></h6>
                    </div>
                </div >
                <div className='ms-5'>
                    <h3>Information</h3>
                    <h6>About us</h6>
                    <h6>Privacy Policy</h6>
                    <h6>Delivery Information</h6>
                    <h6>Site Map</h6>
                    <h6>Contact us</h6>
                </div>
                <div className='ms-5'>
                    <h3>Follow us</h3>
                    <h6>Facebook</h6>
                    <h6>Instagram</h6>
                    <h6>Youtube</h6>
                    <h6>Twitter</h6>
                    <h6>Ok.ru</h6>
                </div>
            </div>
            <div className="py-2 mt-1 item">
                <p>Fakrul Islam &copy; 2024. All Rights Reserved</p>
            </div>
        </Container>
    );
};

export default Footer;