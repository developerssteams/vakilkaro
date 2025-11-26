import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../App.css";

const ServiceSlider = () => {
    const services = [
        {
            title: "Private Limited Company Registration",
            text: "Register your company with full legal protection in just a few days.",
            iconBg: "#FFE9C7",
            icon: "🏢",
        },
        {
            title: "LLP Registration",
            text: "Combine flexibility and liability protection with an easy LLP setup.",
            iconBg: "#DFFFF1",
            icon: "⚖️",
        },
        {
            title: "Partnership Firm Registration",
            text: "Register your partnership to give your business a legal edge.",
            iconBg: "#E4F1FF",
            icon: "🏙️",
        },
        {
            title: "Private Limited Company Registration",
            text: "Register your company with full legal protection in just a few days.",
            iconBg: "#FFE9C7",
            icon: "🏢",
        },
        {
            title: "LLP Registration",
            text: "Combine flexibility and liability protection with an easy LLP setup.",
            iconBg: "#DFFFF1",
            icon: "⚖️",
        },
        {
            title: "Partnership Firm Registration",
            text: "Register your partnership to give your business a legal edge.",
            iconBg: "#E4F1FF",
            icon: "🏙️",
        },
    ];

    return (
        <section className="container">
        <div className="service-section">
            <div className="service-head">
                <h3>Smart Solutions for Modern Businesses</h3>
                All-in-one platform for online legal consultation, business incorporation, corporate compliance, and startup-friendly solutions—tailored for every industry.
            </div>

            <Swiper
                modules={[Pagination]}
                spaceBetween={20}
                slidesPerView={3}
                pagination={{ clickable: true }}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {services.map((s, i) => (
                    <SwiperSlide key={i}>
                        <div className="service-card">
                            <div className="service-icon" style={{ background: s.iconBg }}>
                                {s.icon}
                            </div>
                            <h3>{s.title}</h3>
                            <p>{s.text}</p>
                            <a href="#" className="service-link">
                                Know More →
                            </a>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
        </section>
    );
};

export default ServiceSlider;
