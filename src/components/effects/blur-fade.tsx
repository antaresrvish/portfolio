import React, { useState, useEffect } from 'react';

export const BlurFade = ({ children, delay = 0 }: { children: any, delay?: number }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-700 ease-out transform ${show
          ? 'opacity-100 blur-0 translate-y-0'
          : 'opacity-0 blur-sm translate-y-4'
        }`}
      style={{ 
        transform: show ? 'translateY(0)' : 'translateY(16px)',
        filter: show ? 'blur(0)' : 'blur(4px)'
      }}
    >
      {children}
    </div>
  );
};
