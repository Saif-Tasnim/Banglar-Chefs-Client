/* eslint-disable react/prop-types */
import React from 'react';
import { FaGraduationCap, FaUtensils, FaHeart } from 'react-icons/fa';


const ChefCard = ({ chef }) => {

    const { chef_name, chef_picture, num_recipes, years_of_experience } = chef

    return (

        <div className="card card-compact w-72 bg-base-100 shadow-xl">
            <figure><img src={chef_picture} alt="Shoes" className='h-52 w-72' /></figure>
            <div className="card-body">
                <h2 className="text-center card-title">{chef_name} </h2>

                <div className='mt-3'>
                    <p className='flex items-center gap-2 pt-3'> Experience <FaGraduationCap /> : <span className='font-semibold'>{years_of_experience}  years</span>  </p>
                    
                    <p className='flex items-center gap-2 pt-3'> Recipe  <FaUtensils /> :  <span className='font-semibold'> {num_recipes}  </span> </p>
                    
                    <p className='flex items-center gap-2 pt-3'>
                        Likes  <FaHeart /> : </p>

                </div>

                <div className="card-actions justify-end mt-6">
                    <button className="btn btn-primary">    View Recipe </button>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;