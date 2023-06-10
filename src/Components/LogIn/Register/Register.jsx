import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='mt-20'>
            <div className='w-3/4 mx-auto text-center'>

                <h1 className='font-bold text-3xl'> Sign Up </h1>

                <div className="card flex-shrink-0 w-3/4 shadow-2xl bg-base-100 mx-auto mt-12 mb-16">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-xl pb-2">Name</span>
                            </label>
                            <input type="text" placeholder="enter your name" className="input input-bordered" name="name" required />
                        </div>
                        <div className="form-control mt-2">
                            <label className="label">
                                <span className="label-text font-bold text-xl pb-2">Photo Url</span>
                            </label>
                            <input type="text" placeholder="enter photo url" className="input input-bordered" name="photo" required />
                        </div>
                        <div className="form-control mt-2">
                            <label className="label">
                                <span className="label-text font-bold text-xl pb-2">Email</span>
                            </label>
                            <input type="email" placeholder="enter your email" className="input input-bordered" name="email" required />
                        </div>
                        <div className="form-control mt-2">
                            <label className="label">
                                <span className="label-text font-bold text-xl pb-2">Password</span>
                            </label>
                            <input type="password" placeholder="enter your password" className="input input-bordered" name="password" required />
                            <label className="label">
                                <span className='pt-4'>Already have an account ? 
                                 <Link to="/login" className="label-text-alt link link-hover text-base pl-2">Log In</Link> </span>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary"> Sign Up </button>
                        </div>

                        <hr className='border-blue-800 mt-5' />
                        <h5>Or</h5>
                        <div className="form-control mt-4">
                            <button className="btn btn-primary"><FaGoogle></FaGoogle>  Continue with Google</button>
                        </div>
                        <div className="form-control mt-1">
                            <button className="btn btn-primary"><FaGithub/>  Continue with GitHub </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Register;