import React from 'react';


const FirstSection = () => {

    const imgUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Panta_Ilish.jpg/800px-Panta_Ilish.jpg";
    const imgUrl2 = "https://nijhoom.b-cdn.net/wp-content/uploads/2017/07/kachchi-biryani-bangladeshi-food-600-o.jpg";

    const imgUrl3 = "https://thesimpletravel.com/wp-content/uploads/2022/02/Foods-in-Bangladesh.jpg";

    const imgUrl4 = "https://travelfoodatlas.com/wp-content/uploads/2018/02/Chorchori.jpg"

    return (
        <div className='w-3/4 mx-auto mb-28'>
            <h2 className='text-center text-2xl font-bold mb-11'> Bangla Food </h2>

            <p> Bangladeshi cuisine, also known as Bangla food, is a vibrant and diverse culinary tradition that reflects the countrys rich cultural heritage and geographical diversity. Bangla food is a fusion of flavors, influenced by Mughal, Persian, Middle Eastern, and Southeast Asian culinary traditions. Rice is a staple in Bangla cuisine, often accompanied by a variety of mouth-watering curries and lentil-based dishes. The use of spices is prevalent, with flavors ranging from mild and aromatic to fiery and intense. Mustard oil, cumin, coriander, turmeric, and chili peppers are commonly used to create bold and distinct flavors. Seafood, including fish and prawns, is highly prized, thanks to Bangladeshs abundant rivers and coastal regions. Popular dishes include biryani, korma, hilsa fish curry, panta bhat (fermented rice), and various vegetable preparations. Bangla food is renowned for its complex flavors, vibrant colors, and generous use of aromatic spices, making it a delight for food enthusiasts seeking an authentic and diverse culinary experience. </p>

            {/* carousel with bangla food img */}
            <div className="carousel w-full mt-6">
                <div id="item1" className="carousel-item w-full">
                    <img src={imgUrl} className="w-full md:w-3/4 md:h-3/4 md:mx-auto" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={imgUrl2} className="w-full md:w-3/4 md:h-3/4 md:mx-auto" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={imgUrl3} className="w-full md:w-3/4 md:h-3/4 md:mx-auto" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src={imgUrl4} className="w-full md:w-3/4 md:h-3/4 md:mx-auto" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 md:py-0 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default FirstSection;