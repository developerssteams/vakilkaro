import React from "react";
import "../App.css";
import logo from "../assets/vakilkaro.png"; // apna logo laga dena

 function Header() {
    return (
        <header className="rk-header">
            <div className="rk-box">

                {/* Logo Section */}
                <div className="rk-left">
                    <img src={logo} alt="logo" className="rk-logo" />
                    {/* <span className="rk-title">Vakilkaro</span> */}
                </div>

                {/* Navigation */}
                <nav className="rk-nav">
                    <a href="#">Registrations</a>
                    <a href="#">Compliance</a>
                    <a href="#">IPR</a>
                    <a href="#">Taxation</a>
                    <a href="#">Consultation</a>
                    <a href="#">More</a>
                    <a href="#">Contact Us</a>
                </nav>

                {/* Right Side */}
                <div className="rk-right">
                    <i className="ri-search-line rk-search"></i>

                    <button className="rk-login-btn">Login</button>

                    <button className="rk-expert-btn">
                        <i className="ri-phone-fill"></i>
                        Talk to Experts
                    </button>
                </div>

            </div>
        </header>
    );
}
export default Header;