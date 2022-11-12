import React, { useEffect, useRef, useState } from "react";

function TypingText({ texts = [], children, className = "", ...props }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [inverse, setInverse] = useState(false);
  const currentTextRef = useRef(texts[0]);

  useEffect(() => {
    let interval;
    let timeout;

    interval = setInterval(() => {
      if (currentTextRef.current) {
        const ch = currentTextRef.current[0];
        setDisplayText((s) => s + ch);
        currentTextRef.current = currentTextRef.current.slice(1);
      } else if (inverse) {
        setDisplayText((s) => {
          if (s.length > 0) {
            return s.slice(0, -1);
          } else {
            const nextIndex =
              currentIndex >= texts.length - 1 ? 0 : currentIndex + 1;
            currentTextRef.current = texts[nextIndex];
            setInverse(false);
            setCurrentIndex(nextIndex);
            return "";
          }
        });
      } else {
        clearInterval(interval);
        timeout = setTimeout(() => {
          setInverse(true);
        }, 1000);
      }
    }, 80);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [currentIndex, inverse, texts]);

  return (
    <div className={className} {...props}>
      {children + " " + displayText}
      <span className="inline-block w-3 ml-1 transition-colors border-b-2 border-b-slate-800 dark:border-b-slate-200 animate-blink"></span>
    </div>
  );
}

export default TypingText;
