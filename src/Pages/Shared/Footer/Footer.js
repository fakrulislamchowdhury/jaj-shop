import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <Container className='bg-dark text-white'>
            <div className='item row'>
                <div className='col-lg-6 col-md-12 mt-3'>
                    <div>
                        <h4>Contact Us</h4>
                        <p className='item2'>Be the first to learn about our latest trends and get exclusive offers!</p>
                    </div>
                    <div className='d-flex align-items-center item2'>
                        <img src="https://i.ibb.co.com/pZhCgYJ/phone.png" width="18px" alt="" />
                        <span className='ps-2'>Phone: </span>
                        <span className='ps-1'><small>01834-959234</small></span>
                    </div>
                    <div className='d-flex align-items-center item2'>
                        <img src="https://i.ibb.co.com/RcnP64k/location.png" width="15px" alt="" />
                        <span className='ps-2'>Location:</span>
                        <span className='ps-1'><small>House-45, Rd-7, Banani, Dhaka-1212, BD.</small></span>
                    </div>
                    <div className='d-flex align-items-center item2'>
                        <img className='pe-1' src="https://i.ibb.co.com/y41r07r/gmail.png" width="20px" height="20px" alt="" />
                        <span className='ps-1'>Email:</span>
                        <span className='ps-1'><small>info@jaj-shop.com.bd</small></span>
                    </div>
                </div >
                <div className='col-lg-3 col-md-12 mt-3'>
                    <h4>Get in Touch</h4>
                    <h6 className='item2'>User Guide</h6>
                    <h6 className='item2'>Customer Support</h6>
                    <h6 className='item2'>Privacy Policy</h6>
                    <h6 className='item2'>Concept Vehicles</h6>
                    <h6 className='item2'>Experience & Partnerships</h6>
                    <h6 className='item2'>Service Centers</h6>
                    <h6 className='item2'>Premium Support</h6>
                    <h6 className='item2'>Licensing</h6>
                    <h6 className='item2'>FAQ</h6>
                </div>
                <div className='col-lg-3 col-md-12 mt-3'>
                    <h4>Connect With Us</h4>
                    <h6 className='item2'><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a></h6>
                    <h6 className='item2'><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a></h6>
                    <h6 className='item2'><a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">Youtube</a></h6>
                    <h6 className='item2'><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a></h6>
                    <h6 className='item2'><a href="https://x.com/" target="_blank" rel="noopener noreferrer">Twitter</a></h6>
                    <h6 className='item2'><a href="https://ok.ru/" target="_blank" rel="noopener noreferrer">ok.ru</a></h6>
                </div>
            </div>
            <div className="py-2 mt-5">
                <p>Fakrul Islam &copy; 2024. All Rights Reserved</p>
            </div>
        </Container>
    );
};

export default Footer;