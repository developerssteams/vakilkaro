import React from "react";
import "../App.css";
import logo from "../assets/vakilkaro.png";

function Header() {
    return (
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
                        <a href="#">Registrations</a>

                        {/* Mega Dropdown */}
                        <div className="rk-mega-menu">
                            <div className="rk-mega-column">
                                <a href="#">Startup Registration</a>
                                <a href="#">Private Limited Company</a>
                                <a href="#">Limited Liability Partnership</a>
                                <a href="#">One Person Company</a>

                            </div>

                            <div className="rk-mega-column">
                                <a href="#">Partnership</a>
                                <a href="#">Proprietorship</a>
                                <a href="#">NGO Registration</a>
                                <a href="#">Society Registration</a>
                                <a href="#">Section 8 Company</a>

                            </div>

                            <div className="rk-mega-column">
                                <a href="#">Trust Registration</a>
                                <a href="#">Microfinance Company</a>
                                <a href="#">NBFC Registration</a>
                                <a href="#">Producer Company</a>


                            </div>

                            <div className="rk-mega-column">
                                <a href="#">Public Limited Company</a>
                                <a href="#">Subsidiary Company</a>
                                <a href="#">Insurance Company</a>
                            </div>
                        </div>
                    </div>

                    {/* Other Menus */}
                    <div className="rk-menu-item">
                        <a href="#">NGO</a>
                        <div className="rk-mega-menu">
                            <div className="rk-mega-column">
                                <a href="#">Society Registration</a>
                                <a href="#">Section 8 Company</a>
                                <a href="#">Trust Registration</a>

                            </div>

                            <div className="rk-mega-column">
                                <a href="#">12A Registration</a>
                                <a href="#">80G Registration</a>
                                <a href="#">12A and 80G Registration</a>

                            </div>

                            <div className="rk-mega-column">
                                <a href="#">FCRA Registration</a>
                                <a href="#">NGO Darpan</a>
                                <a href="#">Niti Ayog</a>

                            </div>

                            <div className="rk-mega-column">
                                <a href="#">NGO Registration</a>

                            </div>
                        </div>
                    </div>
                    <div className="rk-menu-item">
                        <a href="#">License</a>
                        <div className="rk-mega-menu">
                            <div className="rk-mega-column">
                                <a href="#">FSSAI License	</a>
                                <a href="#">FSSAI Registration	</a>
                                <a href="#">Startup India Certificate</a>
                                <a href="#">ISO Certificate</a>
                                <a href="#">Barcode Registration</a>

                            </div>

                            <div className="rk-mega-column">
                                <a href="#">HALAL Registration</a>
                                <a href="#">Import Export Code</a>
                                <a href="#">ICEGATE Registration</a>
                                <a href="#">LEI (Legal Entity Identifier)</a>
                                <a href="#">Drug License</a>

                            </div>

                            <div className="rk-mega-column">
                                <a href="#">PF Registration</a>
                                <a href="#">ESI Registration</a>
                                <a href="#">APEDA Registration</a>
                                <a href="#"> BIS Registration Labor License</a>
                                <a href="#">RERA Registration</a>

                            </div>

                            <div className="rk-mega-column">
                                <a href="#">Hallmark Registration</a>
                                <a href="#">Udyam Registration</a>
                                <a href="#">Shop Act Registration</a>

                            </div>
                        </div>
                    </div>

                    <div className="rk-menu-item">
                        <a href="#">Trademark</a>
                        <div className="rk-mega-menu">
                            <div className="rk-mega-column">
                                <a href="#">Trademark Registration</a>
                                <a href="#">Expedited Trademark Registration</a>
                                <a href="#">Trademark Objection</a>
                                <a href="#">Trademark Opposition</a>
                                <a href="#">Trademark Renewal</a>

                            </div>

                            <div className="rk-mega-column">
                                <a href="#">Trademark Hearing</a>
                                <a href="#">Trademark Transfer</a>
                                <a href="#">Trademark Rectification</a>
                                <a href="#">Trademark Protection</a>

                            </div>

                            <div className="rk-mega-column">
                                <a href="#">Copyright Registration</a>
                                <a href="#">Copyright Objection</a>
                                <a href="#">Design Registration</a>
                                <a href="#">  Design Objection</a>
                            </div>
                            <div className="rk-mega-column">
                                <a href="#">Patent Registration</a>
                                <a href="#">Logo Design</a>
                            </div>
                        </div>
                    </div>
                    <div className="rk-menu-item">
                        <a href="#">Income Tax</a>
                        <div className="rk-mega-menu">
                            <div className="rk-mega-column">
                                <a href="#">Professional Tax Registration</a>
                                <a href="#">Form 10BD	</a>
                                <a href="#">ITR -1 Return </a>



                            </div>
                            <div className="rk-mega-column">
                                <a href="#">ITR-2 Return</a>
                                <a href="#">ITR-3 Return</a>
                                <a href="#">ITR-4 Return</a>
                                <a href="#">ITR-5 Return</a>



                            </div>
                            <div className="rk-mega-column">
                                <a href="#">ITR-6 Return</a>
                                <a href="#">ITR-7 Return</a>
                                <a href="#">15CA-15CB Form</a>
                                <a href="#">Income Tax Notice</a>


                            </div>
                        </div>
                    </div>

                    <div className="rk-menu-item">
                        <a href="#">GST</a>
                        <div className="rk-mega-menu">
                            <div className="rk-mega-column">
                                <a href="#">GST Registration</a>
                                <a href="#">GST Notice</a>




                            </div>
                            <div className="rk-mega-column">
                                <a href="#">GST Return Filling</a>
                                <a href="#">GST Revocation</a>




                            </div>
                            <div className="rk-mega-column">
                                <a href="#">GST LUT Form</a>
                                <a href="#">GST Amendment</a>



                            </div>
                        </div>
                    </div>

                    <a href="#">Compliance</a>
                    <a href="#">Funding</a>
                    <a href="#">Legal Drafting</a>
                    <a href="#">Become A Partner</a>
                </nav>

                {/* Right Side */}
                <div className="rk-right">
                    <i className="ri-search-line rk-search"></i>
                    <button className="rk-login-btn">Login</button>
                </div>

            </div>
        </header>
    );
}

export default Header;
