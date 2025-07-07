import { useMenu } from '@/contexts/menu-context';
import { BlurFade } from './effects/blur-fade';
import { useState, useEffect } from 'react';
import { menuItems } from '@/config/menu-config';

interface DynamicLayerProps {
    data: Record<string, any>;
}

export default function DynamicLayer({ data }: DynamicLayerProps) {
    const { activeItem } = useMenu();
    const [isFirstRender, setIsFirstRender] = useState(true);

    useEffect(() => {
        setIsFirstRender(false);
    }, [activeItem]);

    const activeMenuItem = menuItems.find(item => item.id === activeItem);
    
    if (!activeMenuItem) {
        return (
            <div className="text-center text-gray-500 py-12">
                <p>No component?</p>
            </div>
        );
    }

    const LayerComponent = activeMenuItem.component;
    const layerData = data[activeItem];
    const delay = isFirstRender ? 1450 : 0;

    return (
        <BlurFade delay={delay} key={activeItem}>
            <LayerComponent data={layerData} />
        </BlurFade>
    );
}
