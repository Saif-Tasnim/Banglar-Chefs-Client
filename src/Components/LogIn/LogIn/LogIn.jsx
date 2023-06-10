import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const LogIn = () => {

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        if(password.length < 6){
          
              return;
        }

        console.log(email , password);
       
        toast.success("successfully logged in " , {
           position:toast.POSITION.TOP_CENTER,
           autoClose: 2000,
           hideProgressBar: false,
           closeOnClick: true,
           pauseOnHover: false,
           draggable: true,
           progress: undefined

        });

        form.reset();
    }


    return (
        <div className='mt-20'>
            <div className='w-3/4 mx-auto text-center'>

                <h1 className='font-bold text-3xl'> Log In </h1>

                <div className="card flex-shrink-0 w-3/4 shadow-2xl bg-base-100 mx-auto mt-12 mb-16">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-xl pb-2">Email</span>
                                </label>
                                <input type="email" placeholder="enter your email" className="input input-bordered" name="email" required />
                            </div>
                            <div className="form-control mt-4">
                                <label className="label pb-2">
                                    <span className="label-text font-bold text-xl">Password</span>
                                </label>
                                <input type="password" placeholder="enter your password" className="input input-bordered" required />
                                <label className="label">
                                    <span className='pt-4'>New to Banglar Chefs ?
                                        <Link to="/register" className="label-text-alt link link-hover text-base pl-2">Sign Up</Link> </span>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>

                            <hr className='border-blue-800 mt-5' />
                            <h5>Or</h5>
                            <div className="form-control mt-4">
                                <button className="btn btn-primary"><FaGoogle></FaGoogle>  Continue with Google</button>
                            </div>
                            <div className="form-control mt-1">
                                <button className="btn btn-primary"><FaGithub />  Continue with GitHub </button>
                            </div>

                        </form>
                        <ToastContainer/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LogIn;