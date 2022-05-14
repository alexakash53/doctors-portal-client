import React from 'react';

const Banner = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/QMZc841/chair.png" class="max-w-lg rounded-lg shadow-2xl" />
                <div className='pr-20'>
                    <h1 class="text-5xl font-bold">Your New Smile Starts <br /> Here</h1>
                    <p class="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <button class="btn btn-primary text-white uppercase font-blod bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;