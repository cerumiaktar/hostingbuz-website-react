import React from 'react';
import Hero from '../Hero/Hero';
import DomainSection from '../DomainSection/DomainSection';
import Packages from '../Packages/Packages';
import Features from '../Features/Features';
import Hosting from '../Hosting/Hosting';


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <DomainSection></DomainSection>
            <Packages></Packages>
            <Features></Features>
            <Hosting></Hosting>
        </div>
    );
};

export default Home;