import React from 'react';
import Hero from '../Hero/Hero';
import DomainSection from '../DomainSection/DomainSection';
import Packages from '../Packages/Packages';


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <DomainSection></DomainSection>
            <Packages></Packages>
        </div>
    );
};

export default Home;