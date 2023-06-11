import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefBanner from './ChefBanner';
import Recipe from './Recipe';


const ChefDetails = () => {
    const singleData = useLoaderData();
    const { id, chef_picture, chef_name, years_of_experience, like, num_recipes, bio } = singleData;

    const [recipes, setRecipe] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/recipe')
            .then(res => res.json())
            .then(data => setRecipe(data.recipes))
    }, [])


    return (
        <div>
            <ChefBanner
                key={id}
                img={chef_picture}
                name={chef_name}
                experience={years_of_experience}
                like={like}
                recipe={num_recipes}
                bio={bio}

            ></ChefBanner>

       <div className="mt-28 mb-20  w-3/4 mx-auto flex gap-3 items-center">
                <hr className="border-red-900 w-96 ml-10" />
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "black" }}></div>
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "black" }}></div>
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "black" }}></div>
                <hr className="border-red-900 w-96" />
            </div>

            <div className='w-3/4 mx-auto mb-28'>
                <h1 className='text-center text-2xl font-bold mb-11'> Chefs Recipe List </h1>

                {
                    recipes.map(r => <Recipe
                        key={r.recipe_id}
                        r={r}
                    ></Recipe>)
                }
            </div>

            <div>
                <hr />
            </div>

        </div>
    );
};

export default ChefDetails;