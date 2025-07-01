import { useMenu } from '@/contexts/menu-context';
import { BlurFade } from './effects/blur-fade';
import { useState, useEffect, ReactNode } from 'react';
import { IMenuLayerProps } from '@/types/components/menu-layer';

export default function MenuLayer({ layerConfig = {} }: IMenuLayerProps) {
    const { activeItem } = useMenu();
    const [isFirstRender, setIsFirstRender] = useState(true);
    const [initialActiveItem] = useState(activeItem);

    useEffect(() => {
        if (activeItem !== initialActiveItem) {
            setIsFirstRender(false);
        }
    }, [activeItem, initialActiveItem]);

    const renderContent = () => {
        const delay = isFirstRender ? 1450 : 0;
        
        if (layerConfig[activeItem]) {
            return (
                <BlurFade delay={delay} key={activeItem}>
                    {layerConfig[activeItem].component}
                </BlurFade>
            );
        }
        
        return (
            <BlurFade delay={delay} key="default">
                <div className="text-center text-gray-500 py-12">
                    <h3 className="text-xl font-medium mb-2">No Content.</h3>
                    <p>Content for "{activeItem}" is not avalible.</p>
                </div>
            </BlurFade>
        );
    };

    return (
        <div className="w-full mt-8">
            {renderContent()}
        </div>
    );
}