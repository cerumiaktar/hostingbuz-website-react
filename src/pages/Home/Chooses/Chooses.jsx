import React, { useEffect, useState } from 'react';
import Choose from './Choose';
import { IoIosTimer, IoMdLock } from "react-icons/io";

const Chooses = () => {
    const [chooses, setChooses] = useState([])

    useEffect(() => {
        fetch('choose.json')
            .then(res => res.json())
            .then(data => setChooses(data))
    }, [])

    const icons = [IoIosTimer,IoMdLock]

    return (
        <div className='container mx-auto mb-12'>
            <div className='text-center mb-6'>
                <h1 className='text-3xl font-bold'>Why Choose Hosting Buz?</h1>
                <p>Our hosting solutions range from web hosting to blazing-fast dedicated servers.</p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                {
                    chooses.map((choose,index) => <Choose 
                    key={index} 
                    choose={choose} 
                    Icon={icons[index] || IoIosTimer}></Choose>)
                }
            </div>
        </div>
    );
};

export default Chooses;