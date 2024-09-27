import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Hero from '../common/Hero';

const ContactUs = () => {
  return (
    <>
      <Header />
        <main>
            <Hero preHeading='Quality, Integrity, Value' 
                heading='Contact Us '
                text='We excel at transforming visions into reality through<br/> outstanding craftsmanship and precision.'
            />
            <section className="section-9 py-5">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Contact Us</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />since the 1500s, when an unknown printer took a galley of type.</p>
                    </div>

                    <div className="row mt-5">
                        <div className="col-md-3">
                            <div className="card shadow border-0 mb-3">
                                <div className="card-body p-4">
                                    <h3>Call Us</h3>
                                    <div><a href="#">+88011111111111</a></div>
                                    <div><a href="#">+88011111111111</a></div>
                                
                                    <h3 className='pt-4'>You Can Write Us</h3>
                                    <div><a href="#">construction@gamail.com</a></div>
                                    <div><a href="#">construction@gamail.com</a></div>

                                    <h3  className='pt-4'>Address</h3>
                                    <div>Mirpur-2, Dhaka<br/> Bangladesh</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="card shadow border-0">
                                <div className="card-body p-5">
                                <form action="">
                                    <div className="row">
                                        <div className="col-md-6 mb-4">
                                            <label htmlFor="" className='form-label'>Name</label>
                                            <input type="text" className='form-control form-control-lg' placeholder='Enter Name' />
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <label htmlFor="" className='form-label'>Email</label>
                                            <input type="text" className='form-control form-control-lg' placeholder='Enter Email' />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-4">
                                            <label htmlFor="" className='form-label'>Phone</label>
                                            <input type="text" className='form-control form-control-lg' placeholder='Enter Phone No.' />
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <label htmlFor="" className='form-label'>Subject</label>
                                            <input type="text" className='form-control form-control-lg' placeholder='Subject' />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 mb-4">
                                            <label htmlFor="" className='form-label'>Message</label>
                                            <textarea name="" id="" className='form-control form-control-lg' placeholder='Message...'></textarea>
                                        </div>
                                    </div>
                                    <button className='btn btn-primary large mt-3'>Submit</button>
                                </form>
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

export default ContactUs;