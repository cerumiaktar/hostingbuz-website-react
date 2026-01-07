import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() =>{
        fetch('reviews.json')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    } ,[])
    return (
        <div>
            <h1 className='text-3xl font-bold text-center mb-6'>Our Happy Customers</h1>
            <div>
                {
                    reviews.map((review) =><Review review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;