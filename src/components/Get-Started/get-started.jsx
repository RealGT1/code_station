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
    restoreAnimationState();
    createAnimation();
    window.addEventListener('beforeunload', saveAnimationState);

    return () => {
      window.removeEventListener('beforeunload', saveAnimationState);
    };
  }, []);

  const saveAnimationState = () => {
    const animationState = gsap.getProperty(refs.current, 'opacity');
    localStorage.setItem('animationState', JSON.stringify(animationState));
  };

  const restoreAnimationState = () => {
    const savedAnimationState = localStorage.getItem('animationState');
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
        start: 'top 20%',
        end: `+=${window.innerHeight / 1.5}`,
      },
      opacity: 1,
      ease: 'none',
      stagger: 0.1,
    });
  };

  const splitSentences = (phrase) => {
    const sentences = phrase.split('. ');

    let body = sentences.map((sentence, i) => {
      const words = sentence.split(' ');

      const sentenceElement = words.map((word, j) => {
        const isHighlighted = word === 'CodeStation!'; // Specify the highlighted word(s)
        const letters = splitLetters(word, isHighlighted);
        const lastWord = j === words.length - 1;

        // Apply different styles to specific words
        let wordClassName = '';
        if (isHighlighted) {
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
        sentence === 'CodeStation: Empowering students, simplifying coding.'
          ? 'highlight1'
          : '';

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

  const splitLetters = (word, isHighlighted) => {
    let letters = [];
    word.split('').forEach((letter, i) => {
      const opacity = isHighlighted ? 1 : 0.1; // Adjust the opacity values as desired
      letters.push(
        <span
          key={letter + '_' + i}
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
    <main ref={containerRef} className='main'>
      <div className='body'>{splitSentences(phrase)}</div>
    </main>
  );
};

export default Getstarted;
