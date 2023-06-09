/* eslint-disable react/prop-types */
import React from 'react';

const Recipe = ( {r} ) => {

    console.log(r);

    return (
        <div className="card w-full mb-10 md:w-1/2 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title"> {r.recipe_name} </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default Recipe;