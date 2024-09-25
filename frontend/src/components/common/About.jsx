import React from 'react';
import AboutImg from '../../assets/images/about-us.jpg';

const About = () => {
  return (
     <section className="section-2 py-5">
        <div className="container py-5">
            <div className="row">
                <div className="col-md-6">
                    <img src={AboutImg} className="w-100" />
                </div>
                <div className="col-md-6">
                    <span>About Us</span>
                    <h2>Crafting structure that last a lifetime.</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
