import React from "react";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import CarouselComponent from "../components/CarouselComponent";
import AboutComponent from "../components/AboutComponent";
import ServiceComponent from "../components/ServiceComponent";
import PriceComponent from "../components/PriceComponent";
import WorkingHoursComponent from "../components/WorkingHoursComponent";
import TeamComponent from "../components/TeamComponent";
import TestimonialComponent from "../components/TestimonialComponent";

const Home = () =>{
    return (
        <>       

    <CarouselComponent />
    <AboutComponent />
    <ServiceComponent />
    <PriceComponent />
    <WorkingHoursComponent />
    <TeamComponent />
    <TestimonialComponent />   
        </>
    )
}

export default Home;