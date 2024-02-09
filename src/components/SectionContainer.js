import { memo, useContext } from "react";
import { Context } from "../context/context";

const SectionContainer = ({ children, sectionName, title }) => {
  const { openSection, closeSection, nav } = useContext(Context);
  return (
    <section className={nav === sectionName ? "bl-expand bl-expand-top" : ""}>
      {/* Portfolio Title Starts */}
      <div
        className="bl-box valign-wrapper"
        onClick={() => openSection(sectionName)}
      >
        <div className="page-title center-align">
          <h2 className="center-align">
            <span data-hover={title.first}>{title.first} </span>{" "}
            <span data-hover={title.last}>{title.last}</span>
          </h2>
        </div>
      </div>
      {children}
      <picture>
      <img
        alt="close"
        src="images/close-button.png"
        className="bl-icon-close"
        onClick={() => closeSection()}
      />
      </picture>
    </section>
  );
};
export default memo(SectionContainer);
