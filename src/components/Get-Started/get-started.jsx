import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './get-started.css';

const phrase =
  "Experience coding like never before with CodeStation! Collaborate effortlessly, share code seamlessly, and make your college life a breeze.... Join us now and revolutionize your coding journey.. . CodeStation: Empowering students, simplifying coding.";

const Getstarted = () => {
  const refs = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
    autoScroll();
  }, []);

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: true,
        start: 'top',
        end: `+=${window.innerHeight / 1.5}`,
      },
      opacity: 1,
      ease: 'none',
      stagger: 0.1,
    });
  };

  const autoScroll = () => {
    const scrollDuration = 12000; // Adjust the duration as desired
  
    const scrollStep = (distance, stepSize) => {
      const scrollStepSize = distance / (scrollDuration / stepSize);
      let scrollPosition = 0;
  
      const scrollInterval = setInterval(() => {
        if (scrollPosition >= distance) {
          clearInterval(scrollInterval);
        }
        window.scrollBy(0, scrollStepSize);
        scrollPosition += scrollStepSize;
      }, stepSize);
    };
  
    const scrollToBottom = () => {
      const documentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );
      const windowHeight = window.innerHeight;
      const distanceToScroll = documentHeight - windowHeight;
      scrollStep(distanceToScroll, 15); // Adjust the stepSize (scroll speed) as desired
    };
  
    scrollToBottom();
  };
  

  const splitSentences = (phrase) => {
    const sentences = phrase.split('. ');

    let body = sentences.map((sentence, i) => {
      const words = sentence.split(' ');

      const sentenceElement = words.map((word, j) => {
        const letters = splitLetters(word);
        const lastWord = j === words.length - 1;

        // Apply different styles to specific words
        let wordClassName = '';
        if (word === 'CodeStation!') {
          wordClassName = 'highlight';
        }

        return (
          <span key={word + '_' + j} className={wordClassName}>
            {letters}
            {lastWord ? '' : ' '}
          </span>
        );
      });

      const sentenceClassName =
        sentence === 'CodeStation: Empowering students, simplifying coding.' ? 'highlight1' : '';

      // Remove the dot if it's the last sentence
      const hasDot = i !== sentences.length - 1;

      // Mark the end of the sentence with the same color
      const endMarker = hasDot ? ' ' : null;

      return (
        <p key={sentence + '_' + i} className={sentenceClassName}>
          {sentenceElement}
          {endMarker}
        </p>
      );
    });

    return body;
  };

  const splitLetters = (word) => {
    let letters = [];
    word.split('').forEach((letter, i) => {
      letters.push(
        <span key={letter + '_' + i} ref={(el) => refs.current.push(el)}>
          {letter}
        </span>
      );
    });
    return letters;
  };

  return (
    <main ref={containerRef} className='main'>
      <div className='body'>{splitSentences(phrase)}</div>
    </main>
  );
};

export default Getstarted;
