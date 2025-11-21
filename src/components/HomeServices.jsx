import React from "react";
import "../assets/Css/Style.css";

function HomeServices() {
  const services = [
    {
      title: "GST Registration",
      desc: "Register your business and get GSTIN within a few days.",
      img: "https://cdn-icons-png.flaticon.com/512/12404/12404537.png",
    },
    {
      title: "Private Limited Company",
      desc: "Incorporate your company with full legal compliance support.",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    {
      title: "LLP Registration",
      desc: "Flexible structure with liability protection and compliance ease.",
      img: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
    },
    {
      title: "Trademark Registration",
      desc: "Secure your brand identity with a trusted trademark filing.",
      img: "https://cdn-icons-png.flaticon.com/512/709/709579.png",
    },
    {
      title: "Tax Filing",
      desc: "Quick and accurate income tax filing by professionals.",
      img: "https://cdn-icons-png.flaticon.com/512/992/992651.png",
    },
    {
      title: "Business Consultation",
      desc: "Expert advice to help scale and manage your business better.",
      img: "https://cdn-icons-png.flaticon.com/512/1027/1027683.png",
    },
  ];

  return (
    <section className="homeservice-section container py-5">
      <h2 className="homeservice-heading text-center mb-3">
        Smart Solutions for Modern Businesses
      </h2>
      <p className="homeservice-subheading text-center mb-5">
        All-in-one platform for online legal consultation, business incorporation,
        corporate compliance, and startup-friendly solutions—tailored for every industry.
      </p>

      <div className="row g-4 justify-content-center">
        {services.map((service, idx) => (
          <div className="col-md-3 col-sm-6" key={idx}>
            <div className="servicewith_icon text-center">
              <div className="icon-wrapper">
                <img
                  src={service.img}
                  alt={service.title}
                  className="service-icon-img"
                />
              </div>
              <h2>{service.title}</h2>
              <p>{service.desc}</p>
              <a href="#" className="read-more">
                Read More <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HomeServices;
