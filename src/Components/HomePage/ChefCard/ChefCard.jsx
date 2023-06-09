import React from 'react';
import { FaGraduationCap,FaBowlRice,FaHeart } from "react-icons/fa6";

const ChefCard = ({ chef }) => {

    const { bio, chef_name, chef_picture, num_recipes, years_of_experience } = chef

    return (

        <div className="card card-compact w-72 bg-base-100 shadow-xl">
            <figure><img src={chef_picture} alt="Shoes" className='h-52 w-72'/></figure>
            <div className="card-body">
                <h2 className="text-center card-title">{chef_name} </h2>
              
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">    View Recipe </button>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;