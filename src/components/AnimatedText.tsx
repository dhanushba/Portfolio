
import React, { useEffect, useState } from 'react';

interface AnimatedTextProps {
  texts: string[];
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ texts, className = '' }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDeleting && currentText === texts[currentTextIndex]) {
        // Pause at full text before deleting
        setTimeout(() => setIsDeleting(true), 1500);
        return;
      }

      if (isDeleting && currentText === '') {
        // Move to next text after deleting
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setTypingSpeed(100);
        return;
      }

      // Typing logic
      const text = texts[currentTextIndex];
      if (!isDeleting) {
        // Add a character
        setCurrentText(text.substring(0, currentText.length + 1));
        setTypingSpeed(Math.max(50, 100 - Math.random() * 50));
      } else {
        // Remove a character
        setCurrentText(text.substring(0, currentText.length - 1));
        setTypingSpeed(Math.max(30, 60 - Math.random() * 30));
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, currentTextIndex, isDeleting, texts, typingSpeed]);

  return (
    <span className={`inline-block ${className}`}>
      {currentText}
      <span className="inline-block w-[2px] h-6 ml-1 bg-primary animate-blink"></span>
    </span>
  );
};

export default AnimatedText;
