"use client";
import { gsap } from "gsap";
import { useEffect } from "react";
import { StyledBall, StyledPointer } from "./style";

const CursorComponent = () => {
  useEffect(() => {
    gsap.set(".ball", { xPercent: -50, yPercent: -50 });
    const targets = gsap.utils.toArray(".ball");
    window.addEventListener("mousemove", (e) => {
      gsap.to(targets, {
        duration: 0.5,
        ease: "back.out",
        overwrite: "auto",
        stagger: 0.02,
        x: e.clientX,
        y: e.clientY,
      });
    });
  }, []);

  return (
    <>
      <StyledBall className="ball"></StyledBall>
      <StyledPointer className="ball"></StyledPointer>
    </>
  );
};

export default CursorComponent;
