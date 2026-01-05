import React from 'react';

const Blog = ({ blog }) => {
    const { image, title, short_description } = blog;
    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <img className='w-full'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{short_description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;