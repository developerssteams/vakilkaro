import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Banner = () => {
  const titles = [
    "Company Registration",
    "NGO Registration",
    "Trademark Registration",
    "Copyright Registration",
  ];

  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % titles.length;
      const fullText = titles[i];

      // typing or deleting logic
      setText((prev) =>
        isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
      );

      // speed adjustments
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
        setSpeed(50);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setSpeed(120);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, speed]);

  return (
    <section className="banner d-flex align-items-center">
      <div className="container py-5 mt-5">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-md-7 text-white">
            <h1>
              <span style={{ color: "#ffa627" }} className="typewriter">{text}</span> <br />
              made simple with <span style={{ color: "#ffa627" }}>Vakilkaro</span>
            </h1>
            <br />
            <p className="banner-text">
              Incorporate your company with expert legal support.
              100% online, transparent pricing, no hidden charges.
            </p>

            <ul className="bannerserlist">
              <li>
                <i className="fa fa-check-circle" aria-hidden="true"></i> 100% Hassle Free Process
              </li>
              <li>
                <i className="fa fa-gavel" aria-hidden="true"></i> Expert Legal Guidance
              </li>
              <li>
                <i className="fa fa-clock" aria-hidden="true"></i> Fast & Affordable Service
              </li>
            </ul>
          </div>

          <div className="col-md-1"></div>

          {/* Right Form */}
          <div className="col-md-4">
            <div
              className="banner-form shadow-sm p-3 bg-white rounded-3"
              style={{ border: "1px solid #e0e0e0", transition: "transform 0.3s" }}
            >
              <h4 className="mb-3 text-center fw-bold" style={{ color: "#000", fontSize: "18px" }}>
                Get Free Consultation in 30 Minutes
              </h4>

              <form className="form-group">
                <div className="mb-2">
                  <label className="form-label fw-semibold" style={{ color: "#555", fontSize: "0.9rem" }}>
                    Full Name<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                    name="name"
                    style={{
                      borderRadius: "8px",
                      border: "1px solid #ccc",
                      height: "35px",
                      fontSize: "0.9rem",
                      padding: "4px 10px",
                    }}
                    required
                  />
                </div>

                <div className="mb-2">
                  <label className="form-label fw-semibold" style={{ color: "#555", fontSize: "0.9rem" }}>
                    Email<span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    name="email"
                    style={{
                      borderRadius: "8px",
                      border: "1px solid #ccc",
                      height: "35px",
                      fontSize: "0.9rem",
                      padding: "4px 10px",
                    }}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold" style={{ color: "#555", fontSize: "0.9rem" }}>
                    Phone<span className="text-danger">*</span>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter your phone"
                    name="phone"
                    style={{
                      borderRadius: "8px",
                      border: "1px solid #ccc",
                      height: "35px",
                      fontSize: "0.9rem",
                      padding: "4px 10px",
                    }}
                    required
                  />
                </div>

                <div>
                  <label className="form-label fw-semibold" style={{ color: "#555", fontSize: "0.9rem" }}>
                    Service Type<span className="text-danger">*</span>
                  </label>
                  <select className="form-control" name="service" required>
                    <option value="">Service Type</option>
                    <option value="Microfinance Consultancy">Microfinance Consultancy</option>
                    <option value="Company Registration">Company Registration</option>
                    <option value="NGO Registration">NGO Registration</option>
                    <option value="Trademark Registration">Trademark Registration</option>
                    <option value="Copyright Registration">Copyright Registration</option>
                  </select>
                </div>

                <div className="cta-wrapper mt-3">
                  <button type="submit" className="btn theme-btn-primary w-100 bnrbtn">
                    Enquiry Now
                  </button>
                </div>

                <span className="text-dark" style={{ fontSize: "12px" }}>
                  *No spam. 15000+ businesses registered with <b>VakilKaro</b>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
