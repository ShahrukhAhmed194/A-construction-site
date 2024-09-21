import React from "react";
import AboutImg from '../../assets/images/about-us.jpg';
import Header from "../common/Header";
import Footer from "../common/Footer";

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
    </main>
    <Footer />
    </>
    )
}

export default Home;