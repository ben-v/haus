import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Runs passively in the background to manage hash/anchor links since the React Router does not handle them well/at-all.
 * 
 * Base on https://dev.to/mindactuate/scroll-to-anchor-element-with-react-router-v6-38op
 */
const ScrollToHashElementBehavior = () => {
  const location = useLocation();
  const lastHash = useRef("");

  // listen to location change using useEffect with location as dependency
  // https://jasonwatmore.com/react-router-v6-listen-to-location-route-change-without-history-listen
  useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash.slice(1); // safe hash for further use after navigation
    }

    if (lastHash.current && document.getElementById(lastHash.current)) {
      document
        .getElementById(lastHash.current)
        ?.scrollIntoView({ 
          behavior: "smooth", 
          block: "start"
        });
      lastHash.current = "";
    } else {
      // If no hash/anchor, scroll to top of page.
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });      
    }
  }, [location]);

  return null;
};

export default ScrollToHashElementBehavior;
