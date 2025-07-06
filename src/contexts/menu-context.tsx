import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';
import { IMenuContextType } from '@/types/contexts/menu-context';
import { menuConfig, validSectionIds, getMenuItemById } from '@/config/menu-config';

const MenuContext = createContext<IMenuContextType | undefined>(undefined);

export function MenuProvider({ children }: { children: ReactNode }) {
    const router = useRouter();
    const [activeItem, setActiveItem] = useState(menuConfig[0]?.id || 'projects');
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        const section = router.query.section as string;
        if (section && validSectionIds.includes(section)) {
            setActiveItem(section);
        } else if (router.isReady && !router.query.section) {
            const defaultSection = menuConfig[0]?.id || 'projects';
            router.replace(`/?section=${defaultSection}`, undefined, { shallow: true });
        }
        setIsInitialized(true);
    }, [router.query.section, router.isReady]);

    useEffect(() => {
        const handleRouteChange = (url: string) => {
            const urlParams = new URLSearchParams(url.split('?')[1]);
            const section = urlParams.get('section');
            if (section && validSectionIds.includes(section)) {
                setActiveItem(section);
            }
        };

        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    const handleSetActiveItem = (item: string) => {
        if (!isInitialized) return;
        
        if (!validSectionIds.includes(item)) {
            console.warn(`Invalid menu item: ${item}`);
            return;
        }
        
        setActiveItem(item);
        
        const newUrl = {
            pathname: router.pathname,
            query: { ...router.query, section: item }
        };
        
        router.push(newUrl, undefined, { shallow: true });
    };
    const getActiveLayer = () => {
        return getMenuItemById(activeItem);
    };

    return (
        <MenuContext.Provider value={{ 
            activeItem, 
            setActiveItem: handleSetActiveItem, 
            menuLayers: menuConfig,
            getActiveLayer 
        }}>
            {children}
        </MenuContext.Provider>
    );
}

export function useMenu() {
    const context = useContext(MenuContext);
    if (context === undefined) {
        throw new Error('useMenu must be used within a MenuProvider');
    }
    return context;
}
