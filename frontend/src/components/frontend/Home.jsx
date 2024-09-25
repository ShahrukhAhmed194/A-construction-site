import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import ServiceImg from "../../assets/images/construction1.jpg";
import ConstructionImg from "../../assets/images/construction2.jpg";
import BlogImg from "../../assets/images/construction3.jpg";
import Icon1 from "../../assets/images/icon-1.svg";
import Icon2 from "../../assets/images/icon-2.svg";
import Icon3 from "../../assets/images/icon-3.svg";
import AvatarImg from "../../assets/images/author-2.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import About from "../common/About";

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
                            <a className="btn btn-primary large">Contact Now</a>
                            <a className="btn btn-secondary large ms-2">View Projects</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* About Us Section */}
        <About/>
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
                                    <a href="#" className="btn btn-primary small">Read More</a>
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
                                    <a href="#" className="btn btn-primary small">Read More</a>
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
                                    <a href="#" className="btn btn-primary small">Read More</a>
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
                                    <a href="#" className="btn btn-primary small">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </section>

        {/* Why Choose Us */}
        <section className="section-4 py-5">
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
        </section>
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
                                    <a href="#" className="btn btn-primary small">Read More</a>
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
                                    <a href="#" className="btn btn-primary small">Read More</a>
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
                                    <a href="#" className="btn btn-primary small">Read More</a>
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
                                    <a href="#" className="btn btn-primary small">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Testimonials */}
        <section className="section-5 py-5">
            <div className="container">
                <div className="section-header text-center">
                    <span>Testimonials</span>
                    <h2>what people are saying about us.</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. since the 1500s, when an unknown printer took a galley of type.</p>
                </div>
                <Swiper modules={[ Pagination ]}
                        spaceBetween={50} 
                        slidesPerView={3} 
                        pagination={{ clickable: true }} >
                    <SwiperSlide>
                        <div className="card shadow border-0">
                            <div className="card-body p-5">
                                <div className="rating">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                </div>
                                <div className="content pt-4">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. since the 1500s, when an unknown printer took a galley of type.</p>
                                </div>
                                <hr />
                                <div className="meta d-flex">
                                    <div>
                                        <img src={AvatarImg} alt="" width={50}/>
                                    </div>
                                    <div className="ps-3">
                                        <div className="name">John Doe</div>
                                        <div>CEO</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card shadow border-0">
                            <div className="card-body p-5">
                                <div className="rating">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                </div>
                                <div className="content pt-4">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. since the 1500s, when an unknown printer took a galley of type.</p>
                                </div>
                                <hr />
                                <div className="meta d-flex">
                                    <div>
                                        <img src={AvatarImg} alt="" width={50}/>
                                    </div>
                                    <div className="ps-3">
                                        <div className="name">John Doe</div>
                                        <div>CEO</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card shadow border-0">
                            <div className="card-body p-5">
                                <div className="rating">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                </div>
                                <div className="content pt-4">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. since the 1500s, when an unknown printer took a galley of type.</p>
                                </div>
                                <hr />
                                <div className="meta d-flex">
                                    <div>
                                        <img src={AvatarImg} alt="" width={50}/>
                                    </div>
                                    <div className="ps-3">
                                        <div className="name">John Doe</div>
                                        <div>CEO</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card shadow border-0">
                            <div className="card-body p-5">
                                <div className="rating">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                </div>
                                <div className="content pt-4">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. since the 1500s, when an unknown printer took a galley of type.</p>
                                </div>
                                <hr />
                                <div className="meta d-flex">
                                    <div>
                                        <img src={AvatarImg} alt="" width={50}/>
                                    </div>
                                    <div className="ps-3">
                                        <div className="name">John Doe</div>
                                        <div>CEO</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
        {/* Articles & Blogs */}
        <section className="section-6 bg-light py-4">
            <div className="container">
                <div className="section-header text-center">
                    <span>Blog & News</span>
                    <h2>Articles & Blog Posts</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. since the 1500s, when an unknown printer took a galley of type.</p>
                </div>
                <div className="row pt-3">
                    <div className="col-md-4">
                        <div className="card shadow border-0">
                            <div className="card-img-top">
                                <img src={BlogImg} alt="" className="w-100"/>
                            </div>
                            <div className="card-body py-4">
                                <div className="mb-3">
                                    <a href="#" className="title">Dummy Blog Title</a>
                                </div>
                                <a href="#" className="btn btn-primary small">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow border-0">
                            <div className="card-img-top">
                                <img src={BlogImg} alt="" className="w-100"/>
                            </div>
                            <div className="card-body py-4">
                                <div className="mb-3">
                                    <a href="#" className="title">Dummy Blog Title</a>
                                </div>
                                <a href="#" className="btn btn-primary small">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow border-0">
                            <div className="card-img-top">
                                <img src={BlogImg} alt="" className="w-100"/>
                            </div>
                            <div className="card-body py-4">
                                <div className="mb-3">
                                    <a href="#" className="title">Dummy Blog Title</a>
                                </div>
                                <a href="#" className="btn btn-primary small">Read More</a>
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