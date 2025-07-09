import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';
import { MenuContextType } from '@/types/contexts/menu-context';
import { IMenuItem } from '@/types/components/menu-item';

const MenuContext = createContext<MenuContextType | undefined>(undefined);

interface MenuProviderProps {
    children: ReactNode;
    menuData?: IMenuItem;
}

export function MenuProvider({ children, menuData }: MenuProviderProps) {
    const router = useRouter();
    const [activeItem, setActiveItem] = useState('');

    const validIds = menuData?.map(item => item.id) || [];

    useEffect(() => {
        if (menuData && menuData.length > 0 && !activeItem) {
            setActiveItem(menuData[0].id);
        }
    }, [menuData, activeItem]);

    useEffect(() => {
        const section = router.query.section as string;
        if (section && validIds.includes(section)) {
            setActiveItem(section);
        } else if (router.isReady && !router.query.section && menuData && menuData.length > 0) {
            router.replace(`/?section=${menuData[0].id}`, undefined, { shallow: true });
        }
    }, [router.query.section, router.isReady, menuData]);

    const handleSetActiveItem = (item: string) => {
        if (!validIds.includes(item)) return;
        
        setActiveItem(item);
        router.push(`/?section=${item}`, undefined, { shallow: true });
    };

    return (
        <MenuContext.Provider value={{ activeItem, setActiveItem: handleSetActiveItem }}>
            {children}
        </MenuContext.Provider>
    );
}

export function useMenu() {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error('useMenu must be used within a MenuProvider');
    }
    return context;
}
