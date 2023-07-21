import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from "react-router-dom";
import "./get-started.css";

import MultiActionAreaCard1 from "./Java";
import AssemblyCard from "./Assembly";
import PythonCard from "./Python";

const phrase =
  "Experience coding like never before with CodeStation! Collaborate effortlessly, share code seamlessly, and make your college life a breeze.... Join us now and revolutionize your coding journey.. . CodeStation: Empowering students, simplifying coding.";

const Getstarted = () => {
  const refs = useRef([]);
  const containerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
    gsap.registerPlugin(ScrollTrigger);
    restoreAnimationState();
    createAnimation();
    window.addEventListener("beforeunload", saveAnimationState);

    return () => {
      window.removeEventListener("beforeunload", saveAnimationState);
    };
  }, [location.pathname]);

  useEffect(() => {
    const cardTrigger = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 50%",
      },
    });

    cardTrigger.to(".card", { opacity: 1, y: 0, duration: 0.5 });
  }, []);

  const saveAnimationState = () => {
    const animationState = gsap.getProperty(refs.current, "opacity");
    localStorage.setItem("animationState", JSON.stringify(animationState));
  };

  const restoreAnimationState = () => {
    const savedAnimationState = localStorage.getItem("animationState");
    if (savedAnimationState) {
      const parsedState = JSON.parse(savedAnimationState);
      gsap.set(refs.current, { opacity: parsedState });
    }
  };

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: true,
        start: "top 20%",
        end: `+=${window.innerHeight / 1.87}`,
      },
      opacity: 1,
      ease: "none",
      stagger: 0.1,
    });
  };

  const splitSentences = (phrase) => {
    const sentences = phrase.split(". ");

    let body = sentences.map((sentence, i) => {
      const words = sentence.split(" ");

      const sentenceElement = words.map((word, j) => {
        const isHighlighted = word === "CodeStation!"; // Specify the highlighted word(s)
        const letters = splitLetters(word, isHighlighted);
        const lastWord = j === words.length - 1;

        // Apply different styles to specific words
        let wordClassName = "";
        if (isHighlighted) {
          wordClassName = "highlight";
        }

        return (
          <span key={word + "_" + j} className={wordClassName}>
            {letters}
            {lastWord ? "" : " "}
          </span>
        );
      });

      const sentenceClassName =
        sentence === "CodeStation: Empowering students, simplifying coding."
          ? "highlight1"
          : "";

      // Remove the dot if it's the last sentence
      const hasDot = i !== sentences.length - 1;

      // Mark the end of the sentence with the same color
      const endMarker = hasDot ? " " : null;

      return (
        <p key={sentence + "_" + i} className={sentenceClassName}>
          {sentenceElement}
          {endMarker}
        </p>
      );
    });

    return body;
  };

  const splitLetters = (word, isHighlighted) => {
    let letters = [];
    word.split("").forEach((letter, i) => {
      const opacity = isHighlighted ? 1 : 0.1; // Adjust the opacity values as desired
      letters.push(
        <span
          key={letter + "_" + i}
          ref={(el) => refs.current.push(el)}
          style={{ opacity }}
        >
          {letter}
        </span>
      );
    });
    return letters;
  };

  return (
    <div className="main">
      <div className="body" ref={containerRef}>
        {splitSentences(phrase)}
      </div>
      <div className="cardholder">
        <div className="javacard">
          <MultiActionAreaCard1 />
        </div>
        <div className="pythoncard">
          <PythonCard />
        </div>
        <div className="assemblycard">
          <AssemblyCard />
        </div>
        <div className="signInBtn">
          <button className="signIn">Sign In</button>
          <div className="signInLabel">
          For More Options,
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Getstarted;
