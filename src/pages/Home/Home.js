import React from 'react';
import DisplayProduct from '../../components/DisplayProduct/DisplayProduct';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Header/Banner/Banner';
import DisplayReview from '../../components/Reviews/DisplayReviews';
import Summary from '../../components/Summary/Summary';
import Video from '../../components/VideoSection/Video';

const Home = () => {
    return (
        <>
            
            <Banner></Banner>
            <DisplayProduct></DisplayProduct>
            <Summary></Summary>
            <DisplayReview></DisplayReview>
            <Video></Video>
            <Footer></Footer>
            </>
    );
};

export default Home;