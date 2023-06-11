/* eslint-disable react/prop-types */

import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Recipe = ({ r }) => {

  const [like, setLike] = useState(false);

  console.log(r);

  const handleOnClick = () => {
    setLike(true);
    toast.success(`You have Liked The ${r.recipe_name} `,{
      position: toast.POSITION.TOP_CENTER,
    });

  }

  return (
    <div className="card w-full mb-10 md:w-3/4 md:mx-auto bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title justify-center text-teal-500 font-bold pt-5"> {r.recipe_name} </h2>
        <p className='text-xl font-bold mt-9'>Ingredients : </p>

        <div className='text-justify'>
          {
            r.ingredients.map(ing => <span
              key={r.id} className='pr-3'> {ing} , </span>)
          }

        </div>
        <p className='text-xl font-bold mt-9'> Cooking Method : </p>

        <div className='text-justify'>
          {
            r.cooking_method.map(cm => <span
              key={r.id} className='pr-1'> {cm} </span>)
          }

        </div>

        <div className="card-actions justify-between mt-9">
          <Rating
            style={{ maxWidth: 150 }}
            value={r.ratting}
            readOnly
          />
          <button
            onClick={handleOnClick}
            className={`btn btn-primary`}
            disabled = {like}
            >
            <FaHeart />
          </button>
          <ToastContainer  />

        </div>
      </div>
    </div>
  );
};

export default Recipe;