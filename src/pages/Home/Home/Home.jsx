import React from 'react';
import Hero from '../Hero/Hero';
import DomainSection from '../DomainSection/DomainSection';
import Packages from '../Packages/Packages';
import Features from '../Features/Features';
import Hosting from '../Hosting/Hosting';
import Chooses from '../Chooses/Chooses';
import Map from '../Map/Map';


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <DomainSection></DomainSection>
            <Packages></Packages>
            <Features></Features>
            <Hosting></Hosting>
            <Chooses></Chooses>
            <Map></Map>
        </div>
    );
};

export default Home;