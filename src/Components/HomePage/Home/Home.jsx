import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../../Share/Header/Header';
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../ChefCard/ChefCard';

const Home = () => {
    const chefsData = useLoaderData();
    console.log(chefsData);

    return (
        <div className='bg-base-300'>
            <Banner></Banner>

            <div className="mt-28 mb-20  w-3/4 mx-auto flex gap-3 items-center">
                <hr className="border-red-900 w-96" />
                <div style={{width:"10px" , height:"10px" , borderRadius: "50%" , backgroundColor:"black"}}></div>
                <div style={{width:"10px" , height:"10px" , borderRadius: "50%" , backgroundColor:"black"}}></div>
                <div style={{width:"10px" , height:"10px" , borderRadius: "50%" , backgroundColor:"black"}}></div>
                <hr className="border-red-900 w-96" />
            </div>



            {
            /* Chef Section Start */}
            <div className='w-3/4 mx-auto'>
                <h1 className='text-center text-2xl font-bold mb-11'>Chefs Card Section</h1>
               
                <div className='grid grid-cols-3 gap-10 mt-9 mb-32'>
                    {
                        chefsData.map(chef => <ChefCard
                            key={chef.id}
                            chef = {chef}
                        ></ChefCard>)
                    }
                </div>
            </div>

            <div>
                <hr />
            </div>

        </div>
    );
};

export default Home;