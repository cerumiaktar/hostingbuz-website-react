import React, { useEffect, useState } from 'react';
import Client from './Client';
import Marquee from "react-fast-marquee";

const Clients = () => {
    const [clients, setClients] = useState([]);
    useEffect(() =>{
        fetch('clients.json')
        .then(res=>res.json())
        .then(data=>setClients(data))
    } ,[])
    return (
        <div className='container mx-auto mb-12 bg-none'>
            <h1 className='text-3xl font-bold text-center mb-6'>Our Valueable Clients</h1>
            <Marquee className='p-4'>
                {
                    clients.map((client) =><Client client={client}></Client>)
                }
            </Marquee>
        </div>
    );
};

export default Clients;