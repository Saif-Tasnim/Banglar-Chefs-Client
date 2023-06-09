import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefDetails = () => {
    const singleData = useLoaderData();
    console.log(singleData);
   

    return (
        <div>
            <h1>Details are loading very soon {singleData.id} </h1>
        </div>
    );
};

export default ChefDetails;