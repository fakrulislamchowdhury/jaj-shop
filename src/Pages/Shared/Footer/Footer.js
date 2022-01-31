import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <Container className='bg-secondary text-white'>
            <div className='d-flex item2'>
                <div className='bottom pb-3 me-3'>
                    <div>
                        <h3>About Us</h3>
                        <p>Be the first to learn about our latest trends and get exclusive offers.</p>
                    </div>
                    <div className='d-flex align-items-center'>
                        <img src="https://www.pikpng.com/pngl/b/314-3142242_call-now-contact-nbp-telecom-services-icon-clipart.png" width="30px" alt="" />
                        <h5 className='ps-2'>Phone: </h5>
                        <h6 className='ps-3'><small>+8801981731892</small></h6>
                    </div>
                    <div className='d-flex align-items-center'>
                        <img src="https://i1.wp.com/www.gauss-friends.org/wp-content/uploads/2020/04/location-pin-connectsafely-37.png?ssl=1" width="30px" alt="" />
                        <h5 className='ps-2'>location:</h5>
                        <h6 className='ps-3'><small>House-45, Rd-7, Banani, Dhaka-1212, BD.</small></h6>
                    </div>
                    <div className='d-flex align-items-center'>
                        <img src="https://i.ibb.co/YRM2NnH/gmail.png" width="30px" height="30px" alt="" />
                        <h5 className='ps-2'>Email:</h5>
                        <h6 className='ps-3'><small>info@jaj-shop.com.bd</small></h6>
                    </div>
                </div >
                <div className='ms-5'>
                    <h3>Information</h3>
                    <h6>About Us</h6>
                    <h6>Privacy Policy</h6>
                    <h6>Delivery Information</h6>
                    <h6>Site Map</h6>
                    <h6>Contact Us</h6>
                </div>
                <div className='ms-5'>
                    <h3>Follow us</h3>
                    <h6>Facebook</h6>
                    <h6>Instagram</h6>
                    <h6>Youtube</h6>
                    <h6>Twitter</h6>
                    <h6>Contact Us</h6>
                </div>
            </div>
            <div className="py-2 mt-1 item">
                <p>Fakrul Islam &copy; 2022. All Rights Reserved</p>
            </div>
        </Container>
    );
};

export default Footer;