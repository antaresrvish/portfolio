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
    const delay = isFirstRender ? 1.2 : 0;

    const containerVariants = {
        hidden: {
            opacity: 0,
            filter: "blur(10px)",
            scale: 0.95,
            y: 20,
        },
        visible: {
            opacity: 1,
            filter: "blur(0px)",
            scale: 1,
            y: 0,
            transition: {
                duration: isFirstRender ? 0.8 : 0.25,
                delay,
                ease: "easeOut" as const,
            }
        },
        exit: {
            opacity: 0,
            filter: "blur(8px)",
            scale: 0.98,
            y: -10,
            transition: {
                duration: 0.15,
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
                exit="exit"
                className="relative">
                <motion.div
                    initial={{ opacity: 0, filter: "blur(5px)", y: 10 }}
                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    exit={{ opacity: 0, filter: "blur(3px)", y: -5 }}
                    transition={{
                        duration: isFirstRender ? 0.6 : 0.2,
                        delay: delay + (isFirstRender ? 0.3 : 0.05)
                    }}
                    className="relative z-10">
                    <LayerComponent data={layerData} />
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
