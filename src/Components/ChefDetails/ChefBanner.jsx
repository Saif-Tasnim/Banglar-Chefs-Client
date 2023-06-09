/* eslint-disable react/prop-types */
import React from 'react';
import { FaGraduationCap, FaHeart, FaUtensils } from 'react-icons/fa';

const ChefBanner = ({ img, name, experience, like, recipe, bio }) => {
    return (
        <div className=''>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md mt-10">
                        <h1 className="mb-7 text-5xl font-extrabold text-cyan-300 mt-48 md:mt-0"> {name} </h1>
                        <p className="mb-5 text-lime-300">{bio.slice(0, 120)}</p>

                        <div className='flex flex-col justify-center gap-5 text-2xl mt-8  md:flex-row md:items-center md:gap-8 md:text-3xl md:mt-14 mb-10 ml-16'>
                            <p className='text-bold text-yellow-500 flex items-center gap-2'> <FaHeart /> <span>: {like}</span> </p>
                            <p className='text-bold text-orange-400 flex items-center gap-2'> <FaGraduationCap /> <span>: {experience} </span> </p>
                            <p className='text-bold text-amber-500 flex items-center gap-2'> <FaUtensils /> <span>: {recipe} </span> </p>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefBanner;