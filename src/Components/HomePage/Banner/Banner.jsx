import React from 'react';

const Banner = () => {
    const imgUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Panta_Ilish.jpg/800px-Panta_Ilish.jpg";
    const imgUrl2 = "https://nijhoom.b-cdn.net/wp-content/uploads/2017/07/kachchi-biryani-bangladeshi-food-600-o.jpg";

    const imgUrl3 = "https://thesimpletravel.com/wp-content/uploads/2022/02/Foods-in-Bangladesh.jpg";

    const imgUrl4 = "https://travelfoodatlas.com/wp-content/uploads/2018/02/Chorchori.jpg"


    return (

        <div className='flex flex-col gap-10 md:flex-row md:justify-between md:gap-0 w-3/4 mx-auto pt-6'>

            <div className='w-1/2 ml-5 text-4xl pt-9'>

                <h1 className='mb-3 font-bold text-emerald-600 text-xl md:text-4xl'> Experience the  </h1>  
                <h1 className='mb-3 font-bold text-red-600 text-xl md:text-4xl'> Rich Culinary   </h1>
                <h1 className='mb-3 font-bold text-amber-500 text-xl md:text-4xl'> Heritage of </h1>
                <h1 className='mb-3 font-extrabold text-green-800 text-2xl md:text-5xl'>  Bangladesh</h1>
            </div>

            <div className='w-full md:w-1/2'>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={imgUrl} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={imgUrl2} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={imgUrl3} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src={imgUrl4} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
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