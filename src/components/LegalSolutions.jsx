import "../assets/Css/Style.css";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

function LegalSolutions() {
  return (
    <section className="legal-section container my-5">
      {/* Heading Section */}
      <div className="text-center legal-heading">
        <h2 className="legal-title">Find The Best Online Legal Solutions For You</h2>
        <p className="legal-subtitle">
          We take care of the tedious registration process so you can focus on building your dream business.
        </p>
        <button className="cta-btn"> Save ₹50K+ on Compliance Costs Now</button>
      </div>

      {/* Comparison Section */}
      <div className="legal-box">
        {/* Left Column - RegisterKaro */}
        <div className="legal-col left">
          <h4 className="brand">
            <span className="highlight">Vakil</span>Karo
          </h4>
          <ul>
            <li>
              <FaCheckCircle className="icon success" />
              <div className="text-content">
                <strong>All-in-one pricing</strong>
                <p>A single package includes everything you need—no hidden charges.</p>
              </div>
            </li>
            <li>
              <FaCheckCircle className="icon success" />
              <div className="text-content">
                <strong>Personalized assistance</strong>
                <p>A dedicated expert guides you at every step.</p>
              </div>
            </li>
            <li>
              <FaCheckCircle className="icon success" />
              <div className="text-content">
                <strong>End-to-end Service</strong>
                <p>From document collection to final registration, we handle it all.</p>
              </div>
            </li>
            <li>
              <FaCheckCircle className="icon success" />
              <div className="text-content">
                <strong>Simplified process</strong>
                <p>Easy-to-follow steps and clear communication for a stress-free experience.</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Right Column - Others */}
        <div className="legal-col right">
          <h4>Others</h4>
          <ul>
            <li>
              <FaTimesCircle className="icon danger" />
              <div className="text-content">
                <strong>Pay for Each task</strong>
                <p>Separate charges for each task add up quickly.</p>
              </div>
            </li>
            <li>
              <FaTimesCircle className="icon danger" />
              <div className="text-content">
                <strong>No Single Point of Contact</strong>
                <p>Constantly dealing with different people causes delays and confusion.</p>
              </div>
            </li>
            <li>
              <FaTimesCircle className="icon danger" />
              <div className="text-content">
                <strong>Limited Service Scope</strong>
                <p>Only basic tasks covered; extra services cost more or aren’t available.</p>
              </div>
            </li>
            <li>
              <FaTimesCircle className="icon danger" />
              <div className="text-content">
                <strong>Unclear instructions</strong>
                <p>Poor guidance leads to errors and slower processing.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default LegalSolutions;
