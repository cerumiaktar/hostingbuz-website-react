import React from 'react';
import Hero from '../Hero/Hero';
import DomainSection from '../DomainSection/DomainSection';
import Pricing from '../Pricing/Pricing';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <DomainSection></DomainSection>
            <Pricing></Pricing>
        </div>
    );
};

export default Home;