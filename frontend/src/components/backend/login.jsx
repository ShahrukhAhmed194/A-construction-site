import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    // console.log(data);
    const res = await fetch('http://127.0.0.1:8000/api/authenticate', {
        method : 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const result = await res.json();

    if(result.status == false){
        toast.error(result.message);
    }else{
        const userInfo = {
            id: result.id,
            token: result.token
        }
        
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        navigate('/admin/dashboard');
    }
  }
  return (
    <>
        <Header />
            <main>
                <div className="container my-5 d-flex justify-content-center">
                    <div className="login-form my-5">
                        <div className="card border-0 shadow">
                            <div className="card-body p-4">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <h4 className="mb-3">Login Here</h4>
                                    <div className="mb-3">
                                        <label htmlFor="email" className='form-label'>Email</label>
                                        <input type="text" placeholder='Your Email'
                                            className={`form-control ${errors.email && 'is-invalid'}`}
                                            {...register('email', {
                                                required: 'Email is required.',
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9,-]+\.[A-Z]{2,}$/i,
                                                    message: 'Invalid email address'
                                                }
                                            })}
                                        />
                                        { errors.email && <p className='invalid-feedback'>{errors.email?.message}</p>}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className='form-label'>Password</label>
                                        <input type="password" placeholder='Your Password'
                                            className={`form-control ${errors.password && 'is-invalid'}`}
                                            {...register('password', {required: 'Password is required.'})}
                                        />
                                        { errors.password && <p className='invalid-feedback'>{errors.password?.message}</p>}
                                    </div>
                                    <button type='submit' className="btn btn-primary">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        <Footer />
    </>
  )
}

export default Login;
