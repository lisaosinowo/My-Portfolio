import React from "react";
import "../styles/_main.scss";
import check from "../images/main/correct.png";
import codeIMG from "../images/main/code.png";
import briefcaseIMG from "../images/main/briefcase.png";
import linkIMG from "../images/main/link.png";
import birthdaycakeIMG from "../images/main/birthday-cake.png";
import calendarIMG from "../images/main/calendar.png";

const Main = () => {
  return (
    <>
      <div className="main-wrapper">
        <div className="main-container">
          <div class="profile-info">
            <div class="profile-name-follow">
              <div class="profile-name">
                <h1>Lisa Osinowo</h1>
                <img src={check} alt="" />
              </div>
            </div>

            <p id="username">@lisaosinowo</p>

            <div class="profile-quote">
              <p>
                "The best way to predict the future is to create it." -Alan Kay
              </p>
              <img src={codeIMG} alt="" />
            </div>
            <p>
              Web Developer. Aspiring Fullstack Developer. Chemical Engineering
              (BEng) Graduate.
            </p>

            <div class="profile-details">
              <div class="prof-details-sections">
                <img src={briefcaseIMG} alt="" />
                <p>Available</p>
              </div>
              <div class="prof-details-sections">
                <img src={linkIMG} alt="" />
                <p>
                  <a href="#">Links</a>
                </p>
              </div>
              <div class="prof-details-sections">
                <img src={birthdaycakeIMG} alt="" />
                <p>January 6th</p>
              </div>
              <div class="prof-details-sections">
                <img src={calendarIMG} alt="" />
                <p>Joined August 2023</p>
              </div>
            </div>

            <div class="portfolio-sections-container">
              <div class="portfolio-sections">
                <span className="nav-links" onClick={() => showSection("feed")}>
                  Feed
                </span>
                <span
                  className="nav-links"
                  onClick={() => showSection("about")}
                >
                  About
                </span>
                <span
                  className="nav-links"
                  onClick={() => showSection("portfolio")}
                >
                  Projects
                </span>
                <span
                  className="nav-links"
                  onClick={() => showSection("contact")}
                >
                  Contact
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
