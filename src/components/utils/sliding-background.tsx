import { useEffect, useRef, useState, useCallback } from 'react';
import { ISlidingBackground } from '@/types/components/utils/sliding-background';

export function SlidingBackground({ activeItem, className = "", children }: ISlidingBackground) {
    const [transform, setTransform] = useState('translateX(0px)');
    const [width, setWidth] = useState('0px');
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const updateBackground = useCallback(() => {
        if (!activeItem || !containerRef.current) {
            setIsVisible(false);
            return;
        }

        const activeButton = containerRef.current.querySelector(`[data-item-id="${activeItem}"]`) as HTMLElement;
        if (!activeButton) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        const buttonRect = activeButton.getBoundingClientRect();
        
        const offsetLeft = buttonRect.left - containerRect.left;
        
        setTransform(`translateX(${offsetLeft}px)`);
        setWidth(`${buttonRect.width + 20}px`);
        setIsVisible(true);
    }, [activeItem]);

    useEffect(() => {
        updateBackground();
        
        const handleResize = () => updateBackground();
        window.addEventListener('resize', handleResize);
        
        return () => window.removeEventListener('resize', handleResize);
    }, [updateBackground]);

    return (
        <div 
            ref={containerRef}
            className={`relative ${className}`}>
            <div
                className={`absolute top-1 -left-2.5 bottom-2 bg-green-200/20 backdrop-blur-md rounded-full transition-all duration-500 ease-out ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{
                    transform,
                    width,
                }}/>
            {children}
        </div>
    );
}
