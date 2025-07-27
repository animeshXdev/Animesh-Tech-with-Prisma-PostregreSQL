'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const AnimatedBackground = () => {
  const dotsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    dotsRef.current.forEach((dot, i) => {
      gsap.to(dot, {
        duration: 6 + i,
        x: `random(-100, 100)`,
        y: `random(-100, 100)`,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    });
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) dotsRef.current[i] = el;
          }}
          className="w-16 h-16 rounded-full bg-primary opacity-10 blur-2xl absolute"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};
