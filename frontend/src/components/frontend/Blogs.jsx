import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Hero from '../common/Hero';
import BlogImg from "../../assets/images/construction3.jpg";

export default function Blogs() {
  return (
    <>
      <Header />
        <main>
            <Hero 
                preHeading='Quality, Integrity, Value' 
                heading='Blogs & Articles'
                text='We excel at transforming visions into reality through<br/> outstanding craftsmanship and precision.'
            />
            <section className="section-6 bg-light py-4">
                <div className="container">
                    <div className="section-header text-center">
                        <span>Blog & News</span>
                        <h2>Articles & Blog Posts</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. since the 1500s, when an unknown printer took a galley of type.</p>
                    </div>
                    <div className="row pt-3">
                        <div className="col-md-4 mb-3">
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
                        <div className="col-md-4 mb-3">
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
                        <div className="col-md-4 mb-3">
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
