import { useState } from 'react';

interface TooltipProps {
  children: React.ReactNode;
  text: string;
}

export default function Tooltip({ children, text }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}>
      {children}
      
      <div className={`absolute left-1/4 transform -translate-x-1/2 mt-3 px-2 py-1 bg-white font-bold
           text-xs rounded-lg shadow-lg whitespace-nowrap z-50 transition-all duration-300 ease-out
          ${isVisible 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'
          }`}>
        {text}
      </div>
    </div>
  );
}