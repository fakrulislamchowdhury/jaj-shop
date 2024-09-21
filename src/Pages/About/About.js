import React from 'react';
import './About.css';
import banner from '../../img/banner/7.jpg';
import { useHistory } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const About = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push(`/services`);
    }
    return (
        <Container>
            <h1 className='mt-4'><u>About Us</u></h1>
            <div className='row row-cols-1 row-cols-lg-2 pb-5'>
                <div className='col'>
                    <img className='img-fluid pt-5' src={banner} alt="Img" />
                </div>
                <div className='col pt-3 paragraph'>
                    <h2 className='text-info'>Our Management Team</h2>
                    <p><strong>JAJ Shop</strong> is a proprietorship that was founded in July 2020 that specializes in automobile imports. Although we are new, we are committed, and our priorities are commitment over loss, honesty above profit, and service above sales. We are available to help you make your car-buying decision. We'll verify the viability based on your specifications. We pay attention to you, ascertain your needs, and make recommendations. </p>

                    <button onClick={handleClick} type="button" className="btn btn-primary">Learn More ...</button>
                </div>
            </div>
        </Container>
    );
};

export default About;