import React from 'react';
import img1 from '../../photo/company_logo/pic1.jpg';
import img2 from '../../photo/company_logo/pic2.jpg';
import img3 from '../../photo/company_logo/pic3.jpg';
import img4 from '../../photo/company_logo/pic4.jpg';
import img5 from '../../photo/company_logo/pic5.jpg';
import img6 from '../../photo/company_logo/pic6.jpg';
import img7 from '../../photo/company_logo/pic7.jpg';
import img8 from '../../photo/company_logo/pic8.jpg';

const Client = () => {
    
    return (
        <div>
             <h1 className='text-4xl text-center font-semibold mb-5'>Some Of Our Reputed Clients</h1>
            <p className='w-[500px] m-auto'>We are currently servicing clients across the sectors of FMCG, Consumer Goods, Retail, B2B and Technology</p>
            <div className='grid grid-cols-4 w-[1200px] m-auto pt-10 pb-10 gap-10 '>
                <img src={img1}  alt="" />
                <img src={img2}  alt="" />
                <img src={img3}  alt="" />
                <img src={img4}  alt="" />
                <img src={img5}  alt="" />
                <img src={img6}  alt="" />
                <img src={img7}  alt="" />
                <img src={img8}  alt="" />

            </div>
        </div>
    );
};

export default Client;