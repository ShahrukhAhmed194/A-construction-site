import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Hero from '../common/Hero';
import ConstructionImg from "../../assets/images/construction2.jpg";

export default function Projects() {
  return (
    <>
      <Header />
        <main>
            <Hero 
                preHeading='Quality, Integrity, Value' 
                heading='Our Projects '
                text='We excel at transforming visions into reality through<br/> outstanding craftsmanship and precision.'
            />
            <section className="section-3 bg-light py-5">
                <div className="container">
                    <div className="section-header text-center">
                        <span>our projects</span>
                        <h2>Discover Our Diverse Range Projects</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. since the 1500s, when an unknown printer took a galley of type.</p>
                    </div>
                    <div className="row pt-4">
                        <div className="col-md-4 col-lg-4">
                            <div className="item">
                                <div className="service-image">
                                    <img src={ConstructionImg} alt="" className="w-100"/>
                                </div>
                                <div className="service-body">
                                    <div className="service-title">
                                        <h3>Rangpur Projects</h3>
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
                                    <img src={ConstructionImg} alt="" className="w-100"/>
                                </div>
                                <div className="service-body">
                                    <div className="service-title">
                                        <h3>Mymensingh Projects</h3>
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
                                    <img src={ConstructionImg} alt="" className="w-100"/>
                                </div>
                                <div className="service-body">
                                    <div className="service-title">
                                        <h3>Sylhet Projects</h3>
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
                                    <img src={ConstructionImg} alt="" className="w-100"/>
                                </div>
                                <div className="service-body">
                                    <div className="service-title">
                                        <h3>Jessore Projects</h3>
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
                                    <img src={ConstructionImg} alt="" className="w-100"/>
                                </div>
                                <div className="service-body">
                                    <div className="service-title">
                                        <h3>Sylhet Projects</h3>
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
                                    <img src={ConstructionImg} alt="" className="w-100"/>
                                </div>
                                <div className="service-body">
                                    <div className="service-title">
                                        <h3>Jessore Projects</h3>
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
        </main>
      <Footer />
    </>
  )
}
