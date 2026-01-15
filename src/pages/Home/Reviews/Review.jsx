import React from 'react';

const Review = ({ review }) => {
    const { img, title, designation, rating, } = review;
    return (
        <div>
            <div className="card bg-base-100 card-md shadow-sm">
                <div className="card-body">
                    <div className='flex items-center gap-3'>
                        <img className='w-12 h-12' src={img} alt="" />
                        <div>
                            <h2 className="card-title">{title}</h2>
                            <p>{designation}</p>
                        </div>
                    </div>
                    <div className="card-actions">
                        <button className="btn bg-[#100B94] text-white w-full">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;