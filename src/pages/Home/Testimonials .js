import React from 'react';
import quate from '../../assets/icons/quote.svg'
import client1 from '../../assets/images/people1.png'
import client2 from '../../assets/images/people2.png'
import client3 from '../../assets/images/people3.png'
import Review from './Review';

const Testimonials  = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Alex Akash',
            location: 'New-work',
            review: '',
            img: client1
        }, 
        {
            _id: 2,
            name: 'Selina Gomez',
            location: 'China',
            review: '',
            img: client2
        },  
        {
            _id: 3,
            name: 'Ariya Stark',
            location: 'Bangladesh',
            review: '',
            img: client3
        }
    ]
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-primary font-bold'>Testimonials</h4>
                    <h2 className='text-3xl'>What Our Patients Say</h2>
                </div>
                <div>
                    <img src={quate} className="w-24 lg:w-48" alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials ;