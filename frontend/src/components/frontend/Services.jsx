import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Hero from '../common/Hero';
import ServiceImg from "../../assets/images/construction1.jpg";

const Services = () => {
  return (
    <>
        <Header />
            <Hero 
                preHeading='Quality, Integrity, Value' 
                heading='Services '
                text='We excel at transforming visions into reality through<br/> outstanding craftsmanship and precision.'
            />  
            <section className="section-3 bg-light py-5">
            <div className="container">
                <div className="section-header text-center">
                    <span>our services</span>
                    <h2>Our Construction Services</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. since the 1500s, when an unknown printer took a galley of type.</p>
                </div>
                <div className="row pt-4">
                    <div className="col-md-4 col-lg-4">
                        <div className="item">
                            <div className="service-image">
                                <img src={ServiceImg} alt="" className="w-100"/>
                            </div>
                            <div className="service-body">
                                <div className="service-title">
                                    <h3>Speciality Construction</h3>
                                </div>
                                <div className="service-content">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                    <a href="#" className="btn btn-primary small">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4">
                        <div className="item">
                            <div className="service-image">
                                <img src={ServiceImg} alt="" className="w-100"/>
                            </div>
                            <div className="service-body">
                                <div className="service-title">
                                    <h3>Speciality Construction</h3>
                                </div>
                                <div className="service-content">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                    <a href="#" className="btn btn-primary small">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4">
                        <div className="item">
                            <div className="service-image">
                                <img src={ServiceImg} alt="" className="w-100"/>
                            </div>
                            <div className="service-body">
                                <div className="service-title">
                                    <h3>Speciality Construction</h3>
                                </div>
                                <div className="service-content">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                    <a href="#" className="btn btn-primary small">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4">
                        <div className="item">
                            <div className="service-image">
                                <img src={ServiceImg} alt="" className="w-100"/>
                            </div>
                            <div className="service-body">
                                <div className="service-title">
                                    <h3>Speciality Construction</h3>
                                </div>
                                <div className="service-content">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                    <a href="#" className="btn btn-primary small">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4">
                        <div className="item">
                            <div className="service-image">
                                <img src={ServiceImg} alt="" className="w-100"/>
                            </div>
                            <div className="service-body">
                                <div className="service-title">
                                    <h3>Speciality Construction</h3>
                                </div>
                                <div className="service-content">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                    <a href="#" className="btn btn-primary small">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4">
                        <div className="item">
                            <div className="service-image">
                                <img src={ServiceImg} alt="" className="w-100"/>
                            </div>
                            <div className="service-body">
                                <div className="service-title">
                                    <h3>Speciality Construction</h3>
                                </div>
                                <div className="service-content">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                    <a href="#" className="btn btn-primary small">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </section>
        <Footer />
    </>
  )
}

export default Services;
