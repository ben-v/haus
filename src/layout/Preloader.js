import { memo, useEffect, useState } from "react";

const Preloader = () => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 500);
  }, []);

  return (
    <div id="preloader" style={{ display: loader ? "block" : "none" }}>
      <div className="wrapper">
        <div className="preloader-wrapper large active">
          <div className="spinner-layer spinner-only">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div>
            <div className="gap-patch">
              <div className="circle"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default memo(Preloader);
