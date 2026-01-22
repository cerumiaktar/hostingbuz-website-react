import React from 'react';

const Review = ({ review }) => {
    const { img, title, designation, rating, description } = review;
    return (
        <div>
            <div className="card bg-base-100 card-md shadow-sm">
                <div className="card-body">
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-3'>
                            <img className='w-12 h-12' src={img} alt="" />
                            <div>
                                <h2 className="card-title">{title}</h2>
                                <p>{designation}</p>
                            </div>
                        </div>
                        <div>
                            <span className='text-orange-500 text-lg'>{rating}</span>
                        </div>
                    </div>
                    <div>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;