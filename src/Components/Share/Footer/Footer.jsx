import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-black flex flex-col gap-5 md:flex-row md:justify-evenly text-gray-400 p-9'>
            <div>
                <h6 className='mb-4 sm:text-left'>Important Link </h6>
                <ul className='md:text-center'>
                    <li className='pb-2 '>
                        <Link to='/'> Home </Link>
                    </li>
                    <li className='pb-2'>
                        <Link to='/blog'> Blog </Link>
                    </li>
                    <li className='pb-2'>
                        <Link to='/login'>LogIn</Link>
                    </li>
                    <li className='pb-2'>
                        <Link to='/register'>Register</Link>
                    </li>
                </ul>
            </div>

            <div>
                <h6 className='mb-4 sm:text-left'>Contact Address</h6>
                <ul className='text-left md:text-center'>
                    <li className='pb-2'>Dhaka</li>
                    <li className='pb-2'>Chattogram</li>
                    <li className='pb-2'>Khulna</li>
                    <li className='pb-2'>Barishal</li>
                    <li className='pb-2'>Rangpur</li>
                    <li className='pb-2'>Sylhet</li>
                </ul>
            </div>

             <div className="form-control w-52 md:w-80 mt-8">
                    <label className="label mb-5">
                        <span>Enter your email address</span>
                    </label>
                    <div className="flex flex-col gap-5 md:relative">
                        <input type="email" placeholder="your email" className="input input-bordered w-full pr-16" />
                        <button className="btn btn-primary  md:absolute md:top-0 md:right-0 rounded-l-none">Subscribe</button>
                    </div>
                </div>
            </div>

        
    );
};

export default Footer;