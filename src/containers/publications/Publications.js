import React, {useContext} from "react";
import "./Publications.scss";
import {publicationSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Publications() {
  const {isDark} = useContext(StyleContext);
  if (!publicationSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="publications">
        <div className="publication-main-div">
          <div className="publication-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading publication-heading"
                  : "heading publication-heading"
              }
            >
              {publicationSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle publication-subtitle"
                  : "subTitle publication-subtitle"
              }
            >
              {publicationSection.subtitle}
            </p>
          </div>
          <div className="publication-cards-div">
            {publicationSection.publications.map((pub, i) => (
              <div
                key={i}
                className={
                  isDark ? "dark-mode publication-card" : "publication-card"
                }
              >
                <div className="publication-card-header">
                  <span className="publication-publisher">{pub.publisher}</span>
                </div>
                <h3 className="publication-card-title">{pub.title}</h3>
                <p className="publication-card-description">
                  {pub.description}
                </p>
                {pub.link && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="publication-card-link"
                  >
                    View Publication →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}
