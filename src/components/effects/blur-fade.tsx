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
      className={`transition-all duration-700 ease-out ${show
          ? 'opacity-100 blur-0 translate-y-0'
          : 'opacity-0 blur-sm translate-y-4'
        }`}
    >
      {children}
    </div>
  );
};
