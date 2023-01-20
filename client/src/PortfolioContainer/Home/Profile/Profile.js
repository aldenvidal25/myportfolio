import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="cols-icon">
              <a href="https://www.facebook.com/aldenpvidal">
                <i className='fa fa-facebook-square'></i>
              </a>
              <a href="https://www.instagram.com/vidal.alden/">
                <i className='fa fa-instagram'></i>
              </a>
              <a href="https://www.youtube.com/@alden-panganibanvidal.7539">
                <i className='fa fa-youtube-square'></i>
              </a>
              <a href="https://twitter.com/aldenvidal">
                <i className='fa fa-twitter'></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Alden</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Ethusiastic Dev 😎",
                    1000,
                    "Full Stack Developer 💻",
                    1000,
                    "MERN Stack Dev 📱",
                    1000,
                    "WordPress Dev 🔴",
                    1000,
                    "React/React Native Dev 🌐",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Proficiency in creating and managing both the client-facing and server-side aspects of web applications.
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn"> Hire Me </button>
            <a href="ehizcv.pdf" download="Ehiedu Ehizcv.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
