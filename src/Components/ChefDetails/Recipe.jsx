/* eslint-disable react/prop-types */

import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Recipe = ({ r }) => {

  console.log(r);

  return (
    <div className="card w-full mb-10 md:w-3/4 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title"> {r.recipe_name} </h2>
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
            style={{ maxWidth: 180 }}
            value={3}
            readOnly
          />

          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Recipe;