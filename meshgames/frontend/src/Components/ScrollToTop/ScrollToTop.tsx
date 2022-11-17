import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import Button from "../Button/Button";
import "./ScrollToTop.css";

/**
 * A Funtional component that returns a div which takes the user to the top upon clicking on it
 */
function ScrollToTop() {

  // function to set the state
  const [showTopBtn, setShowTopBtn] = useState(false);

  // useEffect which makes the div visible based on where the user is on the screen
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > window.innerHeight) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  // function which navigates the user to the top of the screen
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="top-to-btm">
      {" "}
      {showTopBtn && (
        <Button
          aria-label="scroll to the"
          onClick={goToTop}
          icon={faArrowUp}
          label=" SCROLL UP"
          className="icon-position icon-style"
        />
      )}{" "}
    </div>
  );
};
export default ScrollToTop;