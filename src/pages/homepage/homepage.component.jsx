import React from 'react';

import Directory from '../../components/directory/directory.component';

import { HomePageContainer } from './homepage.styles';

const HomePage = () => {
    return (
        <HomePageContainer>
            <h1 style={{marginTop:'-15px'}}>Welcome to Crown Clothing</h1>
            <h4 style={{marginBottom:'50px', marginTop:'-15px'}}>Wear better, look better</h4>
            <Directory></Directory>
        </HomePageContainer>
    );
};

export default HomePage;