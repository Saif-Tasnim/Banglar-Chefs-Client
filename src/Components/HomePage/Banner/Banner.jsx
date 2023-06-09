import React from 'react';

const Banner = () => {
    const imgUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Panta_Ilish.jpg/800px-Panta_Ilish.jpg";

    return (
     
        <div>

            <div>
             <h1>Experience the Rich <br /> 
                Culinary Heritage of <br />
                Bangladesh</h1>
            </div>

            <div>
              <img src={imgUrl} alt="" />
            </div>
        </div>
       
    );
};

export default Banner;


/* 

img url --->   

<img src="https://www.emetabolic.com/media/pcon/istock-478631029-socialmedia-4483.jpg" alt=" ** banner img ** " className='w-full h-screen' /> 


 <div className="bg-cover bg-center w-full h-screen   bg-no-repeat sm:bg-contain sm:bg-left" style={{ backgroundImage: `url(${imgUrl})` }}>

</div>

*/