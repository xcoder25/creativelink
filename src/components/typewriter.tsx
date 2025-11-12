'use client';

import { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
}

export default function Typewriter({ text, speed = 50 }: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    setDisplayedText('');
    setIsTypingComplete(false);
    let i = 0;
    const intervalId = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(intervalId);
        setIsTypingComplete(true);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return (
    <p>
      {displayedText}
      <span className="typewriter-cursor">|</span>
    </p>
  );
}
