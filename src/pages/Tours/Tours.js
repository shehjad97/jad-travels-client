import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ToursList from './ToursList/ToursList';

const Tours = () => {
    return (
        <div>
            <Header></Header>
            <ToursList></ToursList>
            <Footer></Footer>
        </div>
    );
};

export default Tours;