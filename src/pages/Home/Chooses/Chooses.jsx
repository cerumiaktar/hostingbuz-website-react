import React, { useEffect, useState } from 'react';
import Choose from './Choose';

const Chooses = () => {
    const [chooses,setChooses] = useState([])

    useEffect(() =>{
        fetch('choose.json')
        .then(res =>res.json())
        .then(data=>setChooses(data))
    } ,[])
    return (
        <div className='container mx-auto mb-12'>
            <div className='text-center'>
                <h1 className='text-3xl font-bold'>Why Choose Hosting Buz?</h1>
                <p>Our hosting solutions range from web hosting to blazing-fast dedicated servers.</p>
            </div>
            <div>
                {
                    chooses.map((choose) =><Choose choose={choose}></Choose>)
                }
            </div>
        </div>
    );
};

export default Chooses;