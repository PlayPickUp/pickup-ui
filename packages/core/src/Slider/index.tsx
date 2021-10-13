import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { DefaultTheme, SliderProps } from "../types";

const useStyles = createUseStyles((theme: DefaultTheme) => ({
  sliderContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column"
  },
  sliderWrapper: {
    display: "flex",
    width: "100%",
    position: "relative",
  },
  sliderContentWrapper: {
    overflow: "hidden",
    width: "100%",
    height: "100%",
  },
  sliderContent: {
    display:"flex",
    transition: "all 250ms linear",
    msOverflowStyle: "none" /* hide scrollbar in IE and Edge */,
    scrollbarWidth: "none" /* hide scrollbar in Firefox */,
  },
  /* hide scrollbar in webkit browser */
  webkitScrollbar: {
    display: "none",
  },
  rightArrow: {
    position: "absolute",
    zIndex: 1,
    top: "50%",
    transform: "translateY(-50%)",
    width: "48px",
    height: "48px",
    borderRadius: "24px",
    backgroundColor: "white",
    border: "1px solid #ddd",
    right: "24px",
  },
  leftArrow: {
    position: "absolute",
    zIndex: 1,
    top: "50%",
    transform: "translateY(-50%)",
    width: "48px",
    height: "48px",
    borderRadius: "24px",
    backgroundColor: "white",
    border: "1px solid #ddd",
    left: "24px",
  },
}));

const Slider: React.FC<SliderProps> = ({ 
    children,
    show 
}) => {
  const classes = useStyles();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  const [touchPosition, setTouchPosition] = useState(null);

  // Set the length to match current children from props
  useEffect(() => {
    setLength(children.length);
  }, [children]);

  const next = () => {
    if (currentIndex < length - show) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };

  return (
    <div className={classes.sliderContainer}>
      <div className={classes.sliderWrapper}>
        {currentIndex > 0 && (
          <button onClick={prev} className={classes.leftArrow}>
            &lt;
          </button>
        )}
        <div
          className={classes.sliderContentWrapper}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div
            className={classes.sliderContent}
            style={{
              transform: `translateX(-${currentIndex * (100 / show)}%)`,
            }}
          >
            {children}
          </div>
        </div>
        {currentIndex < length - show && (
          <button onClick={next} className={classes.rightArrow}>
            &gt;
          </button>
        )}
      </div>
    </div>
  );
};

export default Slider;
