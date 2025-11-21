import React from "react";
import HeaderSection from "../components/HeaderSection";
import BlogSection from "../components/HomeBlogs";
import WhyVakilkaro from "../components/WhyVakilkaro";
import Timeline from "../components/Timeline";
import ClientsSection from "../components/ClientsSection";
import Testimonials from "../components/Testimonials";
import PopularSearches from "../components/PopularSearches";
import TawkTo from "../components/TawkTo";
function Home() {
    return (
        <>
          
            <HeaderSection />
            <BlogSection />
            <WhyVakilkaro />
            <Timeline />
            <ClientsSection />
            <Testimonials />
            <PopularSearches />
            <BlogSection />
            <TawkTo />
            

        </>
    );
}
export default Home;