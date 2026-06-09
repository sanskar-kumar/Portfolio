import React, {useContext} from "react";
import "./Hobbies.scss";
import {hobbiesSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Hobbies() {
  const {isDark} = useContext(StyleContext);
  if (!hobbiesSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="hobbies">
        <div className="hobbies-main-div">
          <div className="hobbies-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading hobbies-heading"
                  : "heading hobbies-heading"
              }
            >
              {hobbiesSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle hobbies-subtitle"
                  : "subTitle hobbies-subtitle"
              }
            >
              {hobbiesSection.subtitle}
            </p>
          </div>
          <div className="hobbies-cards-div">
            {hobbiesSection.hobbies.map((hobby, i) => (
              <div
                key={i}
                className={isDark ? "dark-mode hobby-card" : "hobby-card"}
              >
                <span className="hobby-emoji">{hobby.emoji}</span>
                <h3 className="hobby-name">{hobby.name}</h3>
                <p className="hobby-description">{hobby.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}
