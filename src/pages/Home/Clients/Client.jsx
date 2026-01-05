import React from 'react';

const Client = ({ client }) => {
    const { img } = client;
    return (
        <div className='mx-6'>
            <div className="card w-96 bg-base-100 card-md shadow-sm">
                <div className="card-body">
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Client;