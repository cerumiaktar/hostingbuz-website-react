import React, { useEffect, useState } from 'react';
import Package from './Package';

const Packages = () => {
    const [plans, setPlans] = useState([])

    const [activeTab, setActiveTab] = useState('small')
    useEffect(() => {
        fetch(`/${activeTab}.json`)
            .then(res => res.json())
            .then(data => setPlans(data))
    }, [activeTab])
    return (
        <div className='bg-[#F3F3FF] mb-12'>
            <div className='container mx-auto py-20 space-y-6'>
                <div>
                    <h1 className='text-3xl font-bold text-center'>Choose Awesome Plan for your Needs</h1>
                </div>
                <div className='flex justify-center gap-6'>
                    {/* small */}
                    <button onClick={() => setActiveTab('small')} className={`btn ${activeTab === 'small' ? "bg-[#100B94] text-white" : "bg-white"}`}>Small Hosting Plan</button>
                    {/* turbo */}
                    <button onClick={() => setActiveTab('turbo')} className={`btn ${activeTab === 'turbo' ? "bg-[#100B94] text-white" : "bg-white"}`}>Turbo Buz Hosting</button>
                    {/* fast */}
                    <button onClick={() => setActiveTab('fast')} className={`btn ${activeTab === 'fast' ? "bg-[#100B94] text-white" : "bg-white"}`}>Fast Web Hosting</button>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
                    {
                        plans.map((plan) => <Package plan={plan}></Package>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Packages;