import React from "react";
import logo from "../assets/vakilkaro.png";
import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBuilding,
    faAddressCard,
    faTrademark,
    faPhone,
    faHandshake
} from "@fortawesome/free-solid-svg-icons";



function Header() {
    const [phone, setPhone] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [timer, setTimer] = useState(0);
    const [otp, setOtp] = useState("");
    const [serviceType, setServiceType] = useState("");

    // Init AOS
    useEffect(() => {
        AOS.init({ duration: 1200, once: false });
    }, []);

    // OTP Timer
    useEffect(() => {
        let interval = null;
        if (timer > 0) {
            interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
        }
        return () => clearInterval(interval);
    }, [timer]);

    const handleSendOtp = () => {
        if (phone.length === 10) {
            setOtpSent(true);
            setTimer(30);
        }
    };

    const handleResendOtp = () => {
        setTimer(30);
        setOtp("");
    };
    return (
        <>
            <header className="rk-header">
                <div className="rk-box">

                    {/* Logo */}
                    <div className="rk-left">
                        <img src={logo} alt="logo" className="rk-logo" />
                    </div>

                    {/* Navigation */}
                    <nav className="rk-nav">

                        {/* 🔥 Registrations Menu + Mega Dropdown */}
                        <div className="rk-menu-item">
                            <a href="#">Verified Services</a>
                            {/* Mega Dropdown */}

                        </div>

                        {/* Other Menus */}
                        <div className="rk-menu-item">
                            <a href="#">Marketpiace </a>

                        </div>
                        <div className="rk-menu-item">
                            <a href="#">Become Partner</a>

                        </div>

                        <div className="rk-menu-item">
                            <a href="#">Learning</a>

                        </div>

                        <div className="rk-menu-item">
                            <a href="#">Blogs</a>

                        </div>

                        <div className="rk-menu-item">
                            <a href="#">Contact</a>
                        </div>

                    </nav>

                    {/* Right Side */}
                    <div className="rk-right">
                        <i className="ri-search-line rk-search"></i>
                        <button className="rk-login-btn">Login</button>
                    </div>
                </div>
            </header>
            <section className="header-section py-5">
                <div className="container">
                    <div className="row align-items-center mt-5 pt-5">
                        {/* ✅ LEFT COLUMN */}
                        <div className="col-md-6" data-aos="fade-right">
                            <h1 className="fw-bold mb-3">
                                <br />
                                <span className="highlight">Business & Legal Services Under One Roof</span>
                            </h1>
                            <p style={{ color: 'white' }}>
                                Business Registration, Trademark, Taxation, Legal Compliances &
                                Legal Services in few clicks.
                            </p>
                            <a
                                className="buttonheader"
                                data-bs-toggle="modal"
                                data-bs-target="#enquiryModal">
                                <i className="fas fa-user-plus"></i> VIEW SERVICES
                            </a>


                            &nbsp; &nbsp;
                            <a
                                className="buttonheader"
                                data-bs-toggle="modal"
                                data-bs-target="#enquiryModal">
                                <i className="fas fa-user-plus"></i> HIRE  EXPERTS
                            </a>



                        </div>
                        <div className="col-md-6" data-aos="fade-left">
                            <div className="header-slider rounded-4 overflow-hidden shadow-lg mt-4 mt-md-0">
                                <Swiper
                                    modules={[Autoplay, EffectFade]}
                                    effect="fade"
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    loop={true}
                                >
                                    <SwiperSlide>
                                        <img src="https://www.vakilkaro.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fslider3.274ab3fd.webp&w=1080&q=75" alt="" className="img-fluid w-100" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="https://www.vakilkaro.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fslider4.629cb01b.webp&w=1080&q=75" alt="" className="img-fluid w-100" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="https://www.vakilkaro.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fslider5.12345678.webp&w=1080&q=75" alt="" className="img-fluid w-100" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>

                <br />


                <div style={{ textAlign: "center" }}>
                    <h2
                        className="fw-bold mb-3"
                        style={{
                            marginTop: 0,
                            marginBottom: "10px",
                            fontWeight: 700
                        }}
                    >
                        <br />
                        <br />
                        <br />
                        <span
                            className="highlight"
                            style={{
                                color: "white",     // highlight aqua color
                                display: "inline-block"
                            }}
                        >
                            Our Verified Services
                        </span>
                    </h2>
                </div>
                <div className="service-head" style={{ color: 'white' }} >
                    <h3 style={{ color: 'white' }} >Smart Solutions for Modern Businesses</h3>
                    All-in-one platform for online legal consultation, business incorporation, corporate compliance, and startup-friendly solutions—tailored for every industry.
                </div>

                <div className="container mt-4">
                    <div className="row justify-content-center text-center">

                        {/* Company Registration */}
                        <div className="col-md-3 mb-4" data-aos="zoom-in">
                            <div className="service-card p-4 rounded-3 shadow-sm">


                                <h5 className="fw-bold mt-3">Company Registration</h5>
                                <div className="icon-price">
                                    <FontAwesomeIcon icon={faBuilding} className="service-icon-inline" />
                                    <p className="price-inline">₹ 7,999<br /><span>7 days</span></p>
                                </div>


                                <button className="buttonheader w-100 fw-bold">GET STARTED</button>
                            </div>
                        </div>

                        {/* GST Registration */}
                        <div className="col-md-3 mb-4" data-aos="zoom-in" data-aos-delay="200">
                            <div className="service-card p-4 rounded-3 shadow-sm">
                                <h5 className="fw-bold mt-3">GST Registration</h5>
                                <div className="icon-price">
                                    <FontAwesomeIcon icon={faAddressCard} className="service-icon" />
                                    <p className="price-inline">₹ 5,099<br /><span>6 days</span></p>
                                </div>



                                <button className="buttonheader w-100 fw-bold">GET STARTED</button>
                            </div>
                        </div>

                        {/* Trademark Registration */}
                        <div className="col-md-3 mb-4" data-aos="zoom-in" data-aos-delay="400">
                            <div className="service-card p-4 rounded-3 shadow-sm">



                                <h5 className="fw-bold mt-3">Trademark Registration</h5>
                                <div className="icon-price">
                                    <FontAwesomeIcon icon={faTrademark} className="service-icon" />
                                    <p className="price-inline">₹ 9,499<br /><span>4 days</span></p>
                                </div>


                                <button className="buttonheader w-100 fw-bold">GET STARTED</button>
                            </div>
                        </div>

                        {/* FSSAI Registration */}
                        <div className="col-md-3 mb-4" data-aos="zoom-in" data-aos-delay="600">
                            <div className="service-card p-4 rounded-3 shadow-sm">



                                <h5 className="fw-bold mt-3">FSSAI Registration</h5>
                                <div className="icon-price">
                                    <FontAwesomeIcon icon={faBuilding} className="service-icon" />
                                    <p className="price-inline">₹ 7,499<br /><span>7 days</span></p>
                                </div>


                                <button className="buttonheader w-100 fw-bold">GET STARTED</button>
                            </div>
                        </div>

                    </div>
                </div>


                <div style={{ textAlign: "center" }}>
                    <h2
                        className="fw-bold mb-3"
                        style={{
                            marginTop: 0,
                            marginBottom: "10px",
                            fontWeight: 700
                        }}
                    >
                        <br />
                        <br />
                        <br />
                        <span
                            className="highlight"
                            style={{
                                color: "white",     // highlight aqua color
                                display: "inline-block"
                            }}
                        >
                            Our Market Place
                        </span>
                    </h2>
                </div>
               

                <div className="container mt-4">
                    <div className="row justify-content-center text-center">

                        {/* Company Registration */}
                        <div className="col-md-3 mb-4" data-aos="zoom-in">
                            <div className="service-card p-4 rounded-3 shadow-sm">


                                <h5 className="fw-bold mt-3">Company Registration</h5>
                                <div className="icon-price">
                                    <FontAwesomeIcon icon={faBuilding} className="service-icon-inline" />
                                    <p className="price-inline">₹ 7,999<br /><span>7 days</span></p>
                                </div>


                                <button className="buttonheader w-100 fw-bold">GET STARTED</button>
                            </div>
                        </div>

                        {/* GST Registration */}
                        <div className="col-md-3 mb-4" data-aos="zoom-in" data-aos-delay="200">
                            <div className="service-card p-4 rounded-3 shadow-sm">
                                <h5 className="fw-bold mt-3">GST Registration</h5>
                                <div className="icon-price">
                                    <FontAwesomeIcon icon={faAddressCard} className="service-icon" />
                                    <p className="price-inline">₹ 5,099<br /><span>6 days</span></p>
                                </div>



                                <button className="buttonheader w-100 fw-bold">GET STARTED</button>
                            </div>
                        </div>

                        {/* Trademark Registration */}
                        <div className="col-md-3 mb-4" data-aos="zoom-in" data-aos-delay="400">
                            <div className="service-card p-4 rounded-3 shadow-sm">



                                <h5 className="fw-bold mt-3">Trademark Registration</h5>
                                <div className="icon-price">
                                    <FontAwesomeIcon icon={faTrademark} className="service-icon" />
                                    <p className="price-inline">₹ 9,499<br /><span>4 days</span></p>
                                </div>


                                <button className="buttonheader w-100 fw-bold">GET STARTED</button>
                            </div>
                        </div>

                        {/* FSSAI Registration */}
                        <div className="col-md-3 mb-4" data-aos="zoom-in" data-aos-delay="600">
                            <div className="service-card p-4 rounded-3 shadow-sm">



                                <h5 className="fw-bold mt-3">FSSAI Registration</h5>
                                <div className="icon-price">
                                    <FontAwesomeIcon icon={faBuilding} className="service-icon" />
                                    <p className="price-inline">₹ 7,499<br /><span>7 days</span></p>
                                </div>


                                <button className="buttonheader w-100 fw-bold">GET STARTED</button>
                            </div>
                        </div>

                    </div>
                </div>



                {/* ✅ Bootstrap Modal (Popup Form) */}
                <div
                    className="modal fade"
                    id="enquiryModal"
                    tabIndex="-1"
                    aria-labelledby="enquiryModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content p-3">





                        </div>
                    </div>
                </div>
            </section>

        </>



    );
}

export default Header;
