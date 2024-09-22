import React from 'react';
import { Container } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <Container>
            <div className='py-5'>
                <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d912.698619818997!2d90.40223534563532!3d23.790331822361782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c712798ac901%3A0xbd402ac5e42ef1b5!2sRd%207%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1643408096796!5m2!1sen!2sbd" title="map">
                </iframe>
            </div>
            <div className='bottom'>
                <div className='d-flex align-items-center'>
                    <img src="https://i.ibb.co.com/pZhCgYJ/phone.png" width="18px" alt="" />
                    <span className='ps-2'>Phone: </span>
                    <span className='ps-1'><small>01834-959234</small></span>
                </div>
                <div className='d-flex align-items-center'>
                    <img src="https://i.ibb.co.com/RcnP64k/location.png" width="15px" alt="" />
                    <span className='ps-2'>Location:</span>
                    <span className='ps-1'><small>House-45, Rd-7, Banani, Dhaka-1212, BD.</small></span>
                </div>
                <div className='d-flex align-items-center'>
                    <img className='pe-1' src="https://i.ibb.co.com/y41r07r/gmail.png" width="20px" height="20px" alt="" />
                    <span className='ps-1'>Email:</span>
                    <span className='ps-1'><small>info@jaj-shop.com.bd</small></span>
                </div>
            </div >
        </Container>
    );
};

export default Contact;