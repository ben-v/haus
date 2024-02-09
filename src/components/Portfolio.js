import { memo, useCallback, useContext, useEffect } from "react";
import { Context } from "../context/context";
import { directionHover } from "../utils";
import SectionContainer from "./SectionContainer";

const Portfolio = () => {
  const { showProjectFunction, activeProjectFunction } = useContext(Context);
  useEffect(() => {
    directionHover();
  }, []);

  const activeShowProject = useCallback((value) => {
    showProjectFunction();
    activeProjectFunction(value);
  }, []);

  return (
    <SectionContainer
      sectionName="work"
      title={{ first: "my ", last: "portfolio" }}
    >
      <div className="bl-content">
        {/* Main Heading Starts */}
        <div className="container page-title center-align">
          <h2 className="center-align">
            <span data-hover="my">my </span>{" "}
            <span data-hover="portfolio"> portfolio</span>
          </h2>
        </div>
        {/* Main Heading Ends */}
        <div className="container">
          {/* Divider Starts */}
          <div className="divider center-align">
            <span className="outer-line" />
            <span className="fa-solid fa-briefcase" aria-hidden="true" />
            <span className="outer-line" />
          </div>
          <div className="row center-align da-thumbs" id="bl-work-items">
            {/* Project Starts */}
            <div className="col s12 m6 l6 xl4" data-panel="panel-1">
              <a href="#" onClick={() => activeShowProject(1)}>
                <picture>
                  <img
                    className="responsive-img"
                    src="images/projects/project-1.png"
                    alt="Project"
                  />
                </picture>
                <div className="valign-wrapper">
                  <span className="font-weight-700 uppercase">
                  Buy Planner
                  </span>
                </div>
              </a>
            </div>
            {/* Project Ends */}
            {/* Project Starts */}
            <div className="col s12 m6 l6 xl4" data-panel="panel-2">
              <a href="#" onClick={() => activeShowProject(2)}>
                <picture>
                  <img
                    className="responsive-img"
                    src="images/projects/project-2.png"
                    alt="Project"
                  />
                </picture>
                <div className="valign-wrapper">
                  <span className="font-weight-700 uppercase">
                    Position Modeler
                  </span>
                </div>
              </a>
            </div>
            {/* Project Ends */}
            {/* Project Starts */}
            <div className="col s12 m6 l6 xl4" data-panel="panel-3">
              <a href="#" onClick={() => activeShowProject(3)}>
                <picture>
                  <img
                    className="responsive-img"
                    src="images/projects/project-3.png"
                    alt="Project"
                  />
                </picture>
                <div className="valign-wrapper">
                  <span className="font-weight-700 uppercase">
                    Agile Pilot
                  </span>
                </div>
              </a>
            </div>
            {/* Project Ends */}
            {/* Project Starts */}
            <div className="col s12 m6 l6 xl4" data-panel="panel-4">
              <a href="#" onClick={() => activeShowProject(4)}>
                <picture>
                  <img
                    className="responsive-img"
                    src="images/projects/project-4.png"
                    alt="Project"
                  />
                </picture>
                <div className="valign-wrapper">
                  <span className="font-weight-700 uppercase">
                    Truck Control Systems
                  </span>
                </div>
              </a>
            </div>
            {/* Project Ends */}
            {/* Project Starts */}
            <div className="col s12 m6 l6 xl4" data-panel="panel-5">
              <a href="#" onClick={() => activeShowProject(5)}>
                <picture>
                  <img
                    className="responsive-img"
                    src="images/projects/project-5.png"
                    alt="Project"
                  />
                </picture>
                <div className="valign-wrapper">
                  <span className="font-weight-700 uppercase">
                    Pipe Integrity Analysis
                  </span>
                </div>
              </a>
            </div>
            {/* Project Ends */}     
            {/* Project Starts */}
            <div className="col s12 m6 l6 xl4" data-panel="panel-6">
              <a href="#" onClick={() => activeShowProject(6)}>
                <picture>
                  <img
                    className="responsive-img"
                    src="images/projects/project-6.png"
                    alt="Project"
                  />
                </picture>
                <div className="valign-wrapper">
                  <span className="font-weight-700 uppercase">
                  Order Optimization
                  </span>
                </div>
              </a>
            </div>
            {/* Project Ends */} 
            {/* Project Starts */}
            <div className="col s12 m6 l6 xl4" data-panel="panel-7">
              <a href="#" onClick={() => activeShowProject(7)}>
                <picture>
                  <img
                    className="responsive-img"
                    src="images/projects/project-7.png"
                    alt="Project"
                  />
                </picture>
                <div className="valign-wrapper">
                  <span className="font-weight-700 uppercase">
                  Agriculture IoT
                  </span>
                </div>
              </a>
            </div>
            {/* Project Ends */}                                
            {/* Project Starts */}
            <div className="col s12 m6 l6 xl4" data-panel="panel-8">
              <a href="#" onClick={() => activeShowProject(8)}>
                <picture>
                  <img
                    className="responsive-img"
                    src="images/projects/project-8.png"
                    alt="Project"
                  />
                </picture>
                <div className="valign-wrapper">
                  <span className="font-weight-700 uppercase">
                  OpenFMB/MQTT-SN
                  </span>
                </div>
              </a>
            </div>
            {/* Project Ends */}                                
            {/* Project Starts */}
            <div className="col s12 m6 l6 xl4" data-panel="panel-9">
              <a href="#" onClick={() => activeShowProject(9)}>
                <picture>
                  <img
                    className="responsive-img"
                    src="images/projects/project-9.png"
                    alt="Project"
                  />
                </picture>
                <div className="valign-wrapper">
                  <span className="font-weight-700 uppercase">
                  {`Let's Talk`}
                  </span>
                </div>
              </a>
            </div>
            {/* Project Ends */}                                
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default memo(Portfolio);
