import { useMenu } from '@/contexts/menu-context';
import { BlurFade } from './effects/blur-fade';
import { useState, useEffect } from 'react';
import { dataKeyMapping } from '@/config/menu-config';

interface DynamicLayerProps {
    projectData?: any;
    serviceData?: any;
    clientData?: any;
    techStackData?: any;
    connectData?: any;
}

export default function DynamicLayer({ 
    projectData, 
    serviceData, 
    clientData, 
    techStackData, 
    connectData 
}: DynamicLayerProps) {
    const { activeItem, getActiveLayer } = useMenu();
    const [isFirstRender, setIsFirstRender] = useState(true);
    const [initialActiveItem] = useState(activeItem);

    useEffect(() => {
        if (activeItem !== initialActiveItem) {
            setIsFirstRender(false);
        }
    }, [activeItem, initialActiveItem]);

    const renderContent = () => {
        const delay = isFirstRender ? 1450 : 0;
        const activeLayer = getActiveLayer();
        
        if (!activeLayer) {
            return (
                <BlurFade delay={delay} key="default">
                    <div className="text-center text-gray-500 py-12">
                        <p>Layer bulunamadı</p>
                    </div>
                </BlurFade>
            );
        }

        const dataMap: Record<string, any> = {
            projectData,
            serviceData,
            clientData,
            techStackData,
            connectData
        };

        const LayerComponent = activeLayer.component;
        const dataKey = dataKeyMapping[activeLayer.id];
        const layerData = dataKey ? dataMap[dataKey] : undefined;

        return (
            <BlurFade delay={delay} key={activeLayer.id}>
                <LayerComponent data={layerData} />
            </BlurFade>
        );
    };

    return (
        <div className="w-full">
            {renderContent()}
        </div>
    );
}
