import { useMenu } from '@/contexts/menu-context';
import { BlurFade } from './effects/blur-fade';
import { useState, useEffect } from 'react';
import { IMenuItem } from '@/types/components/menu-item';
import One from '@/components/layers/one';
import Two from '@/components/layers/two';
import Three from '@/components/layers/three';
import Four from '@/components/layers/four';
import Five from '@/components/layers/five';
import Card from '@/components/templates/card';

const componentMap: Record<string, React.ComponentType<any>> = {
    'Card': Card,
    'One': One,
    'Two': Two,
    'Three': Three,
    'Four': Four,
    'Five': Five,
};

interface DynamicLayerProps {
    data: Record<string, any>;
    menuData: IMenuItem;
}

export default function DynamicLayer({ data, menuData }: DynamicLayerProps) {
    const { activeItem } = useMenu();
    const [isFirstRender, setIsFirstRender] = useState(true);

    useEffect(() => {
        setIsFirstRender(false);
    }, [activeItem]);

    const activeMenuItem = menuData.find(item => item.id === activeItem);
    
    if (!activeMenuItem) {
        return (
            <div className="text-center text-gray-500 py-12">
                <p>No component?</p>
            </div>
        );
    }
    const LayerComponent = componentMap[activeMenuItem.component];
    
    if (!LayerComponent) {
        return (
            <div className="text-center text-gray-500 py-12">
                <p>Component not found: {activeMenuItem.component}</p>
            </div>
        );
    }

    const layerData = data[activeItem];
    const delay = isFirstRender ? 1450 : 0;

    return (
        <BlurFade delay={delay} key={activeItem}>
            <LayerComponent data={layerData} />
        </BlurFade>
    );
}
