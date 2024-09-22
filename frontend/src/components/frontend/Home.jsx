import React from "react";
import AboutImg from '../../assets/images/about-us.jpg';
import Header from "../common/Header";
import Footer from "../common/Footer";
import ServiceImg from "../../assets/images/construction1.jpg";
import ConstructionImg from "../../assets/images/construction2.jpg";
import Icon1 from "../../assets/images/icon-1.svg";
import Icon2 from "../../assets/images/icon-2.svg";
import Icon3 from "../../assets/images/icon-3.svg";

export const Home = () => {
    return (
    <>
    <Header />
    <main>
        {/* Hero Section */}
        <section className="section-1">
            <div className="hero d-flex align-items-center">
                <div className="container-fluid">
                    <div className="text-center">
                        <span>Welcome to Divine Constructions</span>
                        <h1>Crafting dreams with <br/> precision and excellence.</h1>
                        <p>We excel at transforming visions into reality through outstanding craftsmanship and precision <br/>into reality through outstanding craftsmanship and precision</p>
                        <div className="mt-3">
                            <a className="btn btn-primary">Contact Now</a>
                            <a className="btn btn-secondary ms-2">View Projects</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* About Us Section */}

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

        {/* Our services */}
         <section className="section-3 bg-light py-5">
            <div className="container-fluid">
                <div className="section-header text-center">
                    <span>our services</span>
                    <h2>Our Construction Services</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. since the 1500s, when an unknown printer took a galley of type.</p>
                </div>
                <div className="row pt-4">
                    <div className="col-md-3 col-lg-3">
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
                                    <a href="#" className="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-3">
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
                                    <a href="#" className="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-3">
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
                                    <a href="#" className="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-3">
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
                                    <a href="#" className="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </section>

        {/* Why Choose Us */}
        <div className="section-4 py-5">
            <div className="container py-5">
                <div className="section-header text-center">
                    <span>Why Choose US</span>
                    <h2>Discover Our Wide Varity Of Projects</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. since the 1500s, when an unknown printer took a galley of type.<br/>
                    since the 1500s, when an unknown printer took a galley of type.</p>
                </div>
                <div className="row pt-4">
                    <div className="col-md-4">
                        <div className="card shadow border-0 p-4">
                            <div className="card-icon">
                                <img src={Icon1} alt="" />
                            </div>
                            <div className="card-title mt-3">
                                <h3>Cutting-edge Solution</h3>
                            </div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. since the 1500s, when an unknown printer took a galley of type.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow border-0 p-4">
                            <div className="card-icon">
                                <img src={Icon2} alt="" />
                            </div>
                            <div className="card-title mt-3">
                                <h3>Cutting-edge Solution</h3>
                            </div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. since the 1500s, when an unknown printer took a galley of type.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow border-0 p-4">
                            <div className="card-icon">
                                <img src={Icon3} alt="" />
                            </div>
                            <div className="card-title mt-3">
                                <h3>Cutting-edge Solution</h3>
                            </div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. since the 1500s, when an unknown printer took a galley of type.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Our Projects */}
        <section className="section-3 bg-light py-5">
        <div className="container-fluid">
            <div className="section-header text-center">
                <span>our projects</span>
                <h2>Discover Our Diverse Range Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. since the 1500s, when an unknown printer took a galley of type.</p>
            </div>
            <div className="row pt-4">
                <div className="col-md-3 col-lg-3">
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
                                <a href="#" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-lg-3">
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
                                <a href="#" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-lg-3">
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
                                <a href="#" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-lg-3">
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
                                <a href="#" className="btn btn-primary">Read More</a>
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

export default Home;