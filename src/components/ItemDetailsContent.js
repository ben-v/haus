import { useState } from 'react';

import M from "materialize-css";
import { memo, useEffect, useRef } from "react";
// import { Carousel } from "react-materialize";

// export const LocalVideo = ({ playing }) => {
//   const vidRef = useRef(null);
//   useEffect(() => {
//     if (playing !== 4) {
//       vidRef.current.pause();
//     }
//   }, [playing]);

//   return (
//     <video
//       ref={vidRef}
//       src="images/projects/video/video.mp4"
//       id="video"
//       className="responsive-video"
//       controls="controls"
//       autoPlay
//       poster="images/projects/video/video-poster.png"
//     />
//   );
// };

const ProjectSlider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <div>replace with react-material-ui-carousel</div>
    // <Carousel
    //   options={{
    //     fullWidth: true,
    //     indicators: true,
    //   }}
    //   className="carousel carousel-slider"
    // >
    //   <a className="carousel-item" href="#one!">
    //     <img
    //       className="responsive-img"
    //       src="images/projects/project-2.jpg"
    //       alt="project"
    //     />
    //   </a>
    //   <a className="carousel-item" href="#two!">
    //     <img
    //       className="responsive-img"
    //       src="images/projects/project-1.jpg"
    //       alt="project"
    //     />
    //   </a>
    //   <a className="carousel-item" href="#three!">
    //     <img
    //       className="responsive-img"
    //       src="images/projects/project-3.jpg"
    //       alt="project"
    //     />
    //   </a>
    //   <a className="carousel-item" href="#four!">
    //     <img
    //       className="responsive-img"
    //       src="images/projects/project-4.jpg"
    //       alt="project"
    //     />
    //   </a>
    // </Carousel>
  );
};
export default memo(ProjectSlider);
