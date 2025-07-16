import { useMenu } from '@/contexts/menu-context';
import { useState, useEffect } from 'react';
import { IDynamicLayer } from '@/types/components/dynamic-layer';
import { IMenu } from '@/types/components/menu-item';
import One from '@/components/layers/one';
import Two from '@/components/layers/two';
import Three from '@/components/layers/three';
import Four from '@/components/layers/four';
import Five from '@/components/layers/five';
import Card from '@/components/templates/card';
import { motion, AnimatePresence } from 'motion/react';

const componentMap: Record<string, React.ComponentType<any>> = {
    'Card': Card,
    'One': One,
    'Two': Two,
    'Three': Three,
    'Four': Four,
    'Five': Five,
};

export default function DynamicLayer({ data, menuData }: IDynamicLayer) {
    const { activeItem } = useMenu();
    const [hasRenderedOnce, setHasRenderedOnce] = useState(false);
    const [prevActiveItem, setPrevActiveItem] = useState<string | null>(null);

    useEffect(() => {
        if (activeItem && !hasRenderedOnce) {
            setHasRenderedOnce(true);
        }
        if (activeItem !== prevActiveItem) {
            setPrevActiveItem(activeItem);
        }
    }, [activeItem, hasRenderedOnce, prevActiveItem]);

    const activeMenuItem = menuData.find((item: IMenu) => item.id === activeItem);

    if (!activeItem || !activeMenuItem) {
        return null;
    }
    const LayerComponent = componentMap[activeMenuItem.component];

    if (!LayerComponent) {
        return null;
    }

    const layerData = data[activeItem];
    const isFirstRender = !hasRenderedOnce;
    const delay = isFirstRender ? 1.3 : 0;

    const containerVariants = {
        hidden: {
            opacity: 0,
            y: 30,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: isFirstRender ? 0.5 : 0.1,
                delay,
                ease: "easeOut" as const,
            }
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.1,
                ease: "easeIn" as const
            }
        }
    };

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={activeItem}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit">
                <LayerComponent data={layerData} />
            </motion.div>
        </AnimatePresence>
    );
}
