import { FaUsers, FaUserTie, FaDollarSign, FaHeadset } from "react-icons/fa";

function WhyVakilkaro() {
  return (
    <section className="why-section container">
      <div className="why-left">
        <h2 className="why-heading">Why Vakilkaro?</h2>
        <p className="why-subheading">
          Choose Vakilkaro for unparalleled legal expertise and personalized service,
          ensuring your business navigates the legal landscape with confidence and success.
        </p>

        <div className="why-contact-box">
          <h4>Have any question about us?</h4>
          <p>Don't hesitate to contact us.</p>
          <div className="why-btns">
            <button className="call-btn">CALL US</button>
            <button className="whatsapp-btn">WHATSAPP</button>
          </div>
        </div>
      </div>

      <div className="why-right">
        <div className="why-card">
          <FaUsers className="why-icon" />
          <h4>LARGEST NETWORK</h4>
          <p>
            Our strong network gives you more strength to solve all queries and meet with relevant professionals.
          </p>
        </div>

        <div className="why-card">
          <FaUserTie className="why-icon" />
          <h4>PROFESSIONAL TEAM</h4>
          <p>
            We have 100+ Legal & Professional Experts engaged with us to deliver better advice.
          </p>
        </div>

        <div className="why-card">
          <FaDollarSign className="why-icon" />
          <h4>BEST PRICE GUARANTEE</h4>
          <p>
            We guarantee you'll get top-notch service at an affordable price.
          </p>
        </div>

        <div className="why-card">
          <FaHeadset className="why-icon" />
          <h4>24/7 SUPPORT</h4>
          <p>
            Our Each client WhatsApp group ensures you can get updates anytime.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhyVakilkaro;
