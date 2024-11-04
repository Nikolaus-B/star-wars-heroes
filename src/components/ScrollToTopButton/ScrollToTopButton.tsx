import { useState } from "react";
import { Button } from "./ScrollToTopButton.styled";
import nabooShip from "../../assets/images/star-wars-naboo-ship.png";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Button $isVisible={visible} onClick={scrollToTop}>
      <img
        className="w-[40px] h-[40px]"
        src={nabooShip}
        alt="star wars naboo ship"
      />
    </Button>
  );
};

export default ScrollToTopButton;
