import { Fragment, memo, useMemo, useState } from "react";
import useWindowSize from "../useWindowSize";
import SectionContainer from "./SectionContainer";

import pdfResume from "../docs/Ben_Visintainer_Resume.pdf";

const Experience_Resideo = () => (
  <Fragment>
    <div className="resume-card-header">
      <div className="resume-card-name">
        <i className="fa-solid fa-briefcase" />
        Resideo
      </div>
    </div>
    {/* Experience Header Title Ends */}
    {/* Experience Content Starts */}
    <div className="resume-card-body experience">
      <div className="resume-card-body-container second-font">
        {/* Single Experience Starts */}
        <div className="resume-content">
          <h6 className="uppercase">
            <span>Solution Architect</span>
          </h6>
          <span className="date">
            <i className="fa-regular fa-calendar"></i> 2022 - 2023
          </span>
          <p>
            Developed high-level solution designs for IoT devices, member of cross-functional team to establish a universal domain model & promote a model-first engineering approach.
          </p>
          <p>
            Advocated for schema-driven data models, a model-first engineering approach & provided support to Product & Engineering teams for faster, more efficient product development cycles.
          </p>
          <p>
            Streamlined representation from IoT devices to data platforms, reducing design redundancy, ensured consistency, & facilitated smoother architectural/development processes.
          </p>
        </div>
        {/* <span className="separator" />
        <div className="resume-content">
          <p>skills go here</p>
        </div> */}
      </div>
    </div>
  </Fragment>
);

const Experience_Infinetix = () => (
  <Fragment>
    <div className="resume-card-header">
      <div className="resume-card-name">
        <i className="fa-solid fa-briefcase" />
        Infinetix
      </div>
    </div>
    {/* Experience Header Title Ends */}
    {/* Experience Content Starts */}
    <div className="resume-card-body experience">
      <div className="resume-card-body-container second-font">
        {/* Single Experience Starts */}
        <div className="resume-content">
          <h6 className="uppercase">
            <span>Software Engineer</span>
          </h6>
          <span className="date">
            <i className="fa-regular fa-calendar"></i> 2019 - 2022
          </span>
          <p>
            Developed a .NET desktop application for real-time graphical
            representation of pipe analysis, enabling instant multi-channel data
            insights for users.
          </p>
          <p>
            Created a proof of concept integrating agricultural environmental
            controls with IoT, utilizing .NET Core, Azure Cosmos DB, and Angular
            for cloud data logging and dashboard functionality.
          </p>
          <p>
            Engineered a proof of concept to assess OpenFMB protocol
            compatibility and efficiency with ultra-low-powered endpoints, using
            MQTT/MQTT-SN, Go, RabbitMQ, and BeagleBone Black.
          </p>
        </div>
        {/* Single Experience Ends */}
        {/* <span className="separator" />
        <div className="resume-content">
          <p>skills go here</p>
        </div> */}
      </div>
    </div>
  </Fragment>
);

const Experience_Nordstrom = () => (
  <Fragment>
    <div className="resume-card-header">
      <div className="resume-card-name">
        <i className="fa-solid fa-briefcase" />
        Nordstrom
      </div>
    </div>
    {/* Experience Header Title Ends */}
    {/* Experience Content Starts */}
    <div className="resume-card-body experience">
      <div className="resume-card-body-container second-font">
        {/* Single Experience Starts */}
        <div className="resume-content">
          <h6 className="uppercase">
            <span>Senior Engineer II</span>
          </h6>
          <span className="date">
            <i className="fa-regular fa-calendar"></i> 2017 - 2019
          </span>
          <p>
            Led architectural roadmap development for multi-billion-dollar private label line of business, evolving the technological foundation to leverage modern SOA, UX &amp; telemetry.
          </p>
        </div>
        {/* Single Experience Ends */}
        {/* <span className="separator" /> */}
        {/* Single Experience Starts */}
        <div className="resume-content">
          <h6 className="uppercase">
            <span>Senior Staff Engineer</span>
          </h6>
          <span className="date">
            <i className="fa-regular fa-calendar"></i> 2006 - 2015
          </span>
          <p>
            Led adoption of Agile methodologies, enhancing team/org productivity, collaborative relationships with business partners to drive business &amp; techincal initiatives.
          </p>
          <p>
            Provided technical leadership to drive business growth & optimization for order management, cross-border exchange analysis &amp; organizational change.
          </p>
        </div>
        {/* Single Experience Ends */}
        {/* <span className="separator" /> */}
        {/* <div className="resume-content">
          <p>skills go here</p>
        </div> */}
      </div>
    </div>
  </Fragment>
);

const Experience_Schedulicity = () => (
  <Fragment>
    <div className="resume-card-header">
      <div className="resume-card-name">
        <i className="fa-solid fa-briefcase" />
        Schedulicity
      </div>
    </div>
    {/* Experience Header Title Ends */}
    {/* Experience Content Starts */}
    <div className="resume-card-body experience">
      <div className="resume-card-body-container second-font">
        {/* Single Experience Starts */}
        <div className="resume-content">
          <h6 className="uppercase">
            <span>Director of Engineering</span>
          </h6>
          <span className="date">
            <i className="fa-regular fa-calendar"></i> 2016 - 2017
          </span>
          <p>
            Restructured engineering 10+ member team, embracing remote work, achieving a 250+% increase in productivity in nine months & implemented a comprehensive stack monitoring tooling.
          </p>
          <p>
            Transformed knowledge management for technical, product, and QA, growing from nearly no documentation to over 2,000+ articles, transitioning from {`"tribal knowledge"`} to a single, centralized KB.
          </p>
          <p>
            Led in-depth application monitoring and integrations enhancements for effective notification insights, while also playing a key role as System Architect for a vendor integrations.
          </p>
        </div>
        {/* Single Experience Ends */}
        {/* <span className="separator" />
        <div className="resume-content">
          <p>skills go here</p>
        </div> */}
      </div>
    </div>
  </Fragment>
);

const AboutUs = ({ dark }) => {
  const RESUME_CARD_COUNT = 4;
  const RESUME_POSITION_COUNT = 4;

  const [active, setActive] = useState(0);
  const { width } = useWindowSize();

  const activeState = useMemo(() => ({ active, setActive }), [active]);

  const getResumeCardCssPositionClass = (cardIndex, activeIndex) => {
    let cssClass;

    // // If card index is same as the active index, means, the card should be first
    const diff = cardIndex - activeIndex;
    const positionIndex = diff >= 0 ? diff : RESUME_CARD_COUNT + diff;

    // If the positionIndex is greater than the number of resume card carousel positions, return 'hidden' position.
    cssClass = `position-${positionIndex < RESUME_POSITION_COUNT ? positionIndex : "hidden"
      }`;

    // console.log(
    //   `cardIndex = ${cardIndex}, activeIndex = ${activeIndex}, cssClass = ${cssClass}`
    // );

    return cssClass;
  };

  return (
    <SectionContainer
      sectionName="About"
      title={{ first: "About", last: "ME" }}
    >
      <div className="bl-content">
        {/* Main Heading Starts */}
        <div className="container page-title custom-page-title">
          <h2 className="center-align">
            <span>About</span> <span>Me</span>
          </h2>
        </div>
        {/* Main Heading Ends */}
        <div className="container">
          {/* Divider Starts */}
          <div className="divider center-align">
            <span className="outer-line" />
            <span className="fa-solid fa-address-card" aria-hidden="true" />
            <span className="outer-line" />
          </div>
          {/* Divider Ends */}
          {/* Personal Informations Starts */}
          <div className="row">
            {/* Picture Starts */}
            <div className="col s12 m4 profile-picture show-on-medium-and-down section-padding">
              <picture>
                <img
                  src="images/bio-pic.jpg"
                  className="responsive-img my-picture"
                  alt="My Photo"
                />
              </picture>
            </div>
            {/* Picture Ends */}
            <div className="col s12 m8 l12 xl12 personal-info section-padding">
              <h6 className="uppercase">
                <span>
                  <i className="fa-solid fa-user" />
                </span>
                Personal Info
              </h6>
              <div className="col m12 l12 xl12 p-none">
                <p className="second-font">
                  I specialize in building highly productive and effective
                  engineering teams for small to medium-sized businesses be-it as a manager, lead or IC. My
                  approach is rooted in the belief that the best solutions
                  emerge from diverse minds working together. I am driven by a
                  combination of customer focus, collaborative teamwork, and
                  creative thinking. This blend is essential in creating
                  organizations that harness such energy. My methodology is
                  anchored in constantly challenging the status quo, asking{" "}
                  {`'why'`} and {`'how'`}, envisioning future-ready solutions,
                  and guiding projects from ideation to realization. This
                  approach enables me to craft solutions that not only address{" "}
                  {`today's`} challenges but also anticipate {`tomorrow's`}{" "}
                  needs.
                </p>
              </div>
              <div className="col s12 m12 l12">
                <div className="row sub-text-font">
                  <div className="col s12 m12 l12">
                    <div className="row p-none">
                      <div className="icon-col">
                        <span>
                          <i className="fa-regular fa-flag"></i>
                        </span>
                      </div>
                      <div className="font-weight-700 header-col">Nationality:</div>
                      <div className="body-col">US</div>
                    </div>
                    <div className="row p-none">
                      <div className="icon-col">
                        <span>
                          <i className="fa-solid fa-globe"></i>
                        </span>
                      </div>
                      <div className="font-weight-700 header-col">Language:</div>
                      <div className="body-col">English, Italian (Intermediate)</div>
                    </div>
                    <div className="row p-none">
                      <div className="icon-col">
                        <span>
                          <i className="fa-solid fa-user-graduate"></i>
                        </span>
                      </div>
                      <div className="font-weight-700 header-col">Education:</div>
                      <div className="body-col">Computer Science, Italian Studies - Gonzaga University</div>
                    </div>
                    <div className="row p-none">
                      <div className="icon-col">
                        <span>
                          <i className="fa-regular fa-handshake"></i>
                        </span>
                      </div>
                      <div className="font-weight-700 header-col">Open To:</div>
                      <div className="body-col">Freelance/1099, W-2</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Personal Informations Ends */}
        </div>
        {/* Resume Starts */}
        <div className="resume-container">
          <div className="container">
            <p style={{ display: "none" }}>{width}</p>
            <div className="valign-wrapper row">
              {/* Resume Menu Starts */}
              <div className="resume-list col l4 section-padding">
                {/* Resideo Button */}
                <div
                  className={`resume-list-item ${activeState.active === 0 ? "is-active" : ""
                    }`}
                  data-index={0}
                  id="resume-list-item-0"
                >
                  <div
                    className="resume-list-item-inner"
                    onClick={() => activeState.setActive(0)}
                  >
                    <h6 className="resume-list-item-title uppercase">
                      <span>
                        <i className="fa-solid fa-briefcase" />
                      </span>
                      Resideo
                    </h6>
                  </div>
                </div>
                {/* Resideo Button End */}
                {/* Infinetix Button Start */}
                <div
                  className={`resume-list-item ${activeState.active === 1 ? "is-active" : ""
                    }`}
                  data-index={1}
                  id="resume-list-item-0"
                >
                  <div
                    className="resume-list-item-inner"
                    onClick={() => activeState.setActive(1)}
                  >
                    <h6 className="resume-list-item-title uppercase">
                      <span>
                        <i className="fa-solid fa-briefcase" />
                      </span>
                      Infinetix
                    </h6>
                  </div>
                </div>
                {/* Infinetix Button End */}
                {/* Nordstrom Button Start */}
                <div
                  className={`resume-list-item ${activeState.active === 2 ? "is-active" : ""
                    }`}
                  data-index={2}
                  id="resume-list-item-2"
                >
                  <div
                    className="resume-list-item-inner"
                    onClick={() => activeState.setActive(2)}
                  >
                    <h6 className="resume-list-item-title uppercase">
                      <span>
                        <i className="fa-solid fa-briefcase" />
                      </span>
                      Nordstrom
                    </h6>
                  </div>
                </div>
                {/* Infinetix Button End */}
                {/* Schedulicity Button Start */}
                <div
                  className={`resume-list-item ${activeState.active === 3 ? "is-active" : ""
                    }`}
                  data-index={2}
                  id="resume-list-item-3"
                >
                  <div
                    className="resume-list-item-inner"
                    onClick={() => activeState.setActive(3)}
                  >
                    <h6 className="resume-list-item-title uppercase">
                      <span>
                        <i className="fa-solid fa-briefcase" />
                      </span>
                      Schedulicity
                    </h6>
                  </div>
                </div>
                {/* Schedulicity Button End */}
                {/* Divider Starts */}
                <div className="divider center-align">
                  <span className="outer-line" />
                  <span className="fa-solid fa-download" aria-hidden="true" />
                  <span className="outer-line" />
                </div>
                {/* Divider Ends */}
                {/* Resume Button */}
                <div className="resume-list-item is-active">
                  <div
                    className="resume-list-item-inner"
                    onClick={() => window.open(pdfResume, "_blank")}
                  >
                    <h6 className="resume-list-item-title uppercase">
                      <span>
                        <i className="fa-solid fa-file-pdf" />
                      </span>
                      Resume
                    </h6>
                  </div>
                </div>
              </div>
              {/* Resume Menu Ends */}
              {/* Resume Content Starts */}
              {width < 800 ? (
                <div className="col s12 m12 l8 resume-cards-container section-padding">
                  <div className="resume-cards">
                    <div className="resume-card resume-card-0">
                      <Experience_Resideo />
                    </div>
                    <div className="resume-card resume-card-1">
                      <Experience_Infinetix />
                    </div>
                    <div className="resume-card resume-card-2">
                      <Experience_Nordstrom />
                    </div>
                    <div className="resume-card resume-card-3">
                      <Experience_Schedulicity />
                    </div>

                    {/* <div className="resume-card resume-card-1">
                      <Education />
                    </div>
                    <div className="resume-card resume-card-2">
                      <Skills />
                    </div> */}
                  </div>
                </div>
              ) : (
                <div className="col s12 m12 l8 resume-cards-container section-padding">
                  <div className="resume-cards">
                    {/* Experience_Resideo Starts */}
                    <div
                      className={`resume-card resume-card-0 ${getResumeCardCssPositionClass(
                        0,
                        activeState.active
                      )}`}
                      onClick={() => activeState.setActive(0)}
                      data-index={0}
                    >
                      <Experience_Resideo />
                    </div>
                    {/* Experience_Resideo Ends */}
                    {/* Experience_Infinetix Starts */}
                    <div
                      className={`resume-card resume-card-1 ${getResumeCardCssPositionClass(
                        1,
                        active
                      )}`}
                      data-index={1}
                      onClick={() => activeState.setActive(1)}
                    >
                      <Experience_Infinetix />
                    </div>
                    {/* Experience_Infinetix Ends */}
                    {/* Experience_Nordstrom Starts */}
                    <div
                      className={`resume-card resume-card-2 ${getResumeCardCssPositionClass(
                        2,
                        active
                      )}`}
                      data-index={2}
                      onClick={() => activeState.setActive(2)}
                    >
                      <Experience_Nordstrom />
                    </div>
                    {/* Experience_Nordstrom Ends */}
                    {/* Experience_Schedulicity Starts */}
                    <div
                      className={`resume-card resume-card-3 ${getResumeCardCssPositionClass(
                        3,
                        active
                      )}`}
                      data-index={3}
                      onClick={() => activeState.setActive(3)}
                    >
                      <Experience_Schedulicity />
                    </div>
                    {/* Experience_Schedulicity Ends */}

                    {/* Skills Starts */}
                    {/* <div
                      className={`resume-card resume-card-2 ${
                        active == 2
                          ? "front"
                          : active == 1
                          ? "back"
                          : "back-back"
                      }`}
                      data-index={2}
                      onClick={() => activeState.setActive(2)}
                    >
                      <Skills />
                    </div> */}
                    {/* Skills Ends */}
                  </div>
                </div>
              )}

              {/* Resume Content Ends */}
            </div>
          </div>
        </div>
        {/* Resume Ends */}
      </div>
    </SectionContainer>
  );
};
export default memo(AboutUs);
