import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TawkTo = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const sendWhatsApp = () => {
    if (!message.trim()) return alert("Please enter a message");
    const phone = "919928246121";
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <>
      {/* FLOATING BUTTON LIKE TAWKTO */}
      <div className="wa-launch-btn" onClick={() => setOpen(!open)}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="wa"
        />
      </div>

      {/* POPUP BOX SAME LIKE TAWKTO */}
      <div className={`wa-widget-box ${open ? "open" : ""}`}>
        {/* Header */}
        <div className="wa-header">
          <span className="back-arrow" onClick={() => setOpen(false)}>
            ❮
          </span>
          <h5>Messages</h5>
        </div>

        {/* Body */}
        <div className="wa-body">

          <div className="wa-new-chat-box">
            <div>
              <h6>Start a new chat</h6>
              <button
                className="wa-new-chat-btn"
                onClick={() => document.getElementById("waTextArea").focus()}
              >
                New Conversation ➤
              </button>
            </div>
          </div>

          <label className="form-label mt-3">Your Message</label>
          <textarea
            id="waTextArea"
            className="form-control"
            rows="3"
            placeholder="Write your message here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button className="btn btn-success mt-3 w-100" onClick={sendWhatsApp}>
            Send on WhatsApp
          </button>
        </div>
      </div>

      {/* STYLES */}
      <style>{`
        /* Floating Button */
        .wa-launch-btn {
          position: fixed;
          bottom: 25px;
          right: 25px;
          width: 60px;
          height: 60px;
          background: #25D366;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          cursor: pointer;
          z-index: 9999;
          transition: .3s;
        }
        .wa-launch-btn:hover {
          transform: scale(1.1);
        }
        .wa-launch-btn img { width: 35px; height: 35px; }

        /* CHAT BOX */
        .wa-widget-box {
          position: fixed;
          bottom: 100px;
          right: 20px;
          width: 350px;
          height: 500px;
          background: #fff;
          border-radius: 20px 20px 20px 20px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.25);
          overflow: hidden;
          z-index: 999999;
          transform: translateY(120%);
          opacity: 0;
          transition: all .4s ease;
        }
        .wa-widget-box.open {
          transform: translateY(0);
          opacity: 1;
        }

        /* Header */
        .wa-header {
          background: #198754;
          color: #fff;
          padding: 14px 18px;
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 16px;
        }
        .back-arrow {
          cursor: pointer;
          font-size: 20px;
        }

        /* Body */
        .wa-body {
          padding: 15px;
          overflow-y: auto;
          height: calc(100% - 60px);
        }

        /* New Chat Box */
        .wa-new-chat-box {
          border: 1px solid #ddd;
          padding: 15px;
          border-radius: 14px;
          margin-bottom: 20px;
        }
        .wa-new-chat-box h6 {
          font-weight: bold;
          margin-bottom: 10px;
        }
        .wa-new-chat-btn {
          width: 100%;
          padding: 10px;
          border-radius: 10px;
          border: 1px solid #555;
          background: transparent;
          font-size: 16px;
        }
      `}</style>
    </>
  );
};

export default TawkTo;
