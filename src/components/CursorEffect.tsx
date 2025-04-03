
import React, { useEffect, useState } from 'react';

const CursorEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [trails, setTrails] = useState<{ id: number; x: number; y: number; opacity: number }[]>([]);
  let trailId = 0;

  useEffect(() => {
    const addTrail = (x: number, y: number) => {
      setTrails(prev => [...prev, { id: trailId++, x, y, opacity: 1 }]);
    };

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      addTrail(e.clientX, e.clientY);
    };

    const handleMouseEnter = () => setHidden(false);
    const handleMouseLeave = () => setHidden(true);
    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const handleLinkHoverStart = () => setLinkHovered(true);
    const handleLinkHoverEnd = () => setLinkHovered(false);

    const removeOldTrails = () => {
      setTrails(prev => prev.map(trail => ({ ...trail, opacity: trail.opacity - 0.05 }))
                            .filter(trail => trail.opacity > 0));
    };

    const trailInterval = setInterval(removeOldTrails, 100);

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Add event listeners to all links and buttons
    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleLinkHoverStart);
      link.addEventListener('mouseleave', handleLinkHoverEnd);
    });

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleLinkHoverStart);
        link.removeEventListener('mouseleave', handleLinkHoverEnd);
      });
      
      clearInterval(trailInterval);
    };
  }, []);

  // Only render on client side
  if (typeof window === 'undefined') return null;

  return (
    <>
      {trails.map(trail => (
        <div
          key={trail.id}
          className="trail"
          style={{
            left: trail.x,
            top: trail.y,
            opacity: trail.opacity,
          }}
        />
      ))}
      <div
        className={`cursor-dot small ${hidden ? 'opacity-0' : 'opacity-100'}`}
        style={{
          left: position.x,
          top: position.y,
          transform: `scale(${clicked ? 0.5 : 1})`,
        }}
      />
      <div
        className={`cursor-dot large ${hidden ? 'opacity-0' : 'opacity-100'} ${
          linkHovered ? 'scale-150 opacity-30' : ''
        }`}
        style={{
          left: position.x,
          top: position.y,
        }}
      />
    </>
  );
};

export default CursorEffect;
