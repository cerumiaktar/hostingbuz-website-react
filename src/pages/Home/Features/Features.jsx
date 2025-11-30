import React, { useEffect, useState } from 'react';
import Feature from './Feature';

const Features = () => {
    const [features, setFeatures] = useState([])

    useEffect(() =>{
        fetch('features.json')
        .then(res=>res.json())
        .then(data=>setFeatures(data))
    } ,[])
    return (
        <div className='container mx-auto mb-12'>
            <div>
                <h1 className='text-3xl font-bold text-center mb-6'>Advanced Features</h1>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4'>
                {
                    features.map((feature) =><Feature feature={feature}></Feature>)
                }
            </div>
        </div>
    );
};

export default Features;