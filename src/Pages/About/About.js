import React from 'react';
import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                    <img src={person} alt='' className="w-4/5 h-full rounded-lg shadow-2xl" />
                    <img src={parts} alt='' className="absolute right-5 w-3/5 top-1/2 border-8 rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2'>
                    <p className='text-2xl my-5 font-semibold text-orange-600'>About Us</p>
                    <h1 className="text-3xl my-3 font-bold">We are qualified <br />
                        & of experience <br />
                        in this field</h1>
                    <p className="py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ratione sint minima dignissimos. Eligendi magnam quasi enim nulla obcaecati, ex eum ullam pariatur vitae officiis.</p>
                    <p className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, molestias quis vitae impedit sequi rerum dignissimos nisi reiciendis mollitia dolores?</p>
                    <button className="btn btn-primary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;