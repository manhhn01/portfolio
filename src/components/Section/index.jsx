import React, { useEffect, useRef, useState } from "react";

function Section({ title, children, id }) {
  const sectionRef = useRef(null);
  const [displayTitle, setDisplayTitle] = useState("");
  const currentTitle = useRef(title);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    let interval;
    const typing = () => {
      interval = setInterval(() => {
        if (currentTitle.current) {
          const ch = currentTitle.current[0];
          setDisplayTitle((s) => s + ch);
          currentTitle.current = currentTitle.current.slice(1);
        } else {
          clearInterval(interval);
        }
      }, 100);
    };

    const titleObserver = new IntersectionObserver(
      (entries, observer) => {
        if (entries[0].isIntersecting) {
          typing();
          setShowContent(true);
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.3, rootMargin: "60px" },
    );
    titleObserver.observe(sectionRef.current);

    return () => {
      titleObserver.disconnect();
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="container pt-[64px]" ref={sectionRef} id={id}>
      <div className="mb-6 h-[2.25rem]">
        <h2 className="text-3xl font-semibold text-light-acc dark:text-dark-acc">
          {displayTitle}
          <span className="inline-block w-3 ml-1 transition-colors border-b-2 border-b-light-acc dark:border-b-dark-acc animate-blink"></span>
        </h2>
      </div>
      <div
        className={
          "text-lg transition-all translate-y-6 opacity-0 duration-700 delay-200  " +
          (showContent ? "opacity-100 translate-y-0" : "")
        }
      >
        {children}
      </div>
    </div>
  );
}

export default Section;
