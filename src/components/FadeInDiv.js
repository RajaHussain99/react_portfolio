import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./../App.css";

const FadeInDiv = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <CSSTransition
      in={show}
      classNames="fade"
      timeout={2000}
      appear
      unmountOnExit
    >
      <div className="fade-in">Div</div>
    </CSSTransition>
  );
};

export default FadeInDiv;
