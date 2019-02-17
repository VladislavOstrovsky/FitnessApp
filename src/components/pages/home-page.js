import React from 'react';
import AppHeader from '../app-header/app-header';
import SideBar from "../menu-burger/menu-burger";
import HomePageCard from '../home-page-card/home-page-card';

const HomePage = () => {
    return (
         <div id="App">
            <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
            <div id="page-wrap" className="home-content">
                <AppHeader />
                <div className="cards-pages">
                    <HomePageCard />
                    <HomePageCard />
                    <HomePageCard />
                </div>
                
            </div>
         </div>
    );
};

export default HomePage;