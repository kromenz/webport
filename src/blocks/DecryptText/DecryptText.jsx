import React, { useState, useRef, useEffect } from "react";

const randomChars = "!<>-_\\ABCDEFGHIJKLMNOPQRSTUVWXYZ@/[]{}—=+*^?#________";
function getRandomChar() {
  return randomChars[Math.floor(Math.random() * randomChars.length)];
}

const DecryptText = ({ text, speed = 50, threshold = 0.3, className }) => {
  const ref = useRef(null);
  const [display, setDisplay] = useState("");
  const inView = useRef(false);
  const intervalRef = useRef(null);

  const revealIndices = useRef(
    text
      .split("")
      .map((c, i) => (c === " " || c === "\n" ? null : i))
      .filter((i) => i !== null)
  );

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.intersectionRatio >= threshold;
        if (isVisible && !inView.current) {
          startAnimation();
        } else if (!isVisible && inView.current) {
          resetDisplay();
        }
        inView.current = isVisible;
      },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const resetDisplay = () => {
    clearInterval(intervalRef.current);
    const scrambled = text
      .split("")
      .map((c) => (c === " " || c === "\n" ? c : getRandomChar()))
      .join("");
    setDisplay(scrambled);
  };

  const startAnimation = () => {
    resetDisplay();

    const order = [...revealIndices.current];

    let step = 0;
    intervalRef.current = setInterval(() => {
      step++;
      setDisplay((prev) => {
        const arr = prev.split("");
        const idx = order[step - 1];
        if (idx !== undefined) {
          arr[idx] = text[idx];
        }
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] !== text[i] && text[i] !== " " && text[i] !== "\n") {
            arr[i] = getRandomChar();
          }
        }
        return arr.join("");
      });
      if (step >= order.length) {
        clearInterval(intervalRef.current);
        setDisplay(text);
      }
    }, speed);
  };

  useEffect(resetDisplay, [text]);

  return (
    <p ref={ref} className={className} style={{ whiteSpace: "pre-wrap" }}>
      {display}
    </p>
  );
};

export default DecryptText;
