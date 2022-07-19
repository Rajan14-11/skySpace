import React from 'react';
import './About.css';
import Bounce from 'react-reveal/Bounce';


const About = () => {
    return (
        <div className='about'>
         <div className='mainAbout container p-5'>
            <div className='row d-flex align-items-center justify-content-between'>
           <Bounce left>
        <div className='col-sm-12 col-md-6 col-lg-6'>
            <div className='aboutTitle'>
                <h2>About</h2>
                <p className='aboutText'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
            </div>
        </div>
        </Bounce>
        <Bounce right>
        <div className='col-sm-12 col-md-6 col-lg-6'>
            <div className='aboutImg'>
            <img className='img-fluid animation' src="https://i.ibb.co/DYNxH00/about-us-1-1536x1536.png" alt="img" />
            </div>
        </div>
        </Bounce>
            </div>
        </div>
       </div>
    );
};

export default About;