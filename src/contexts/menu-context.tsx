import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';
import { MenuContextType } from '@/types/contexts/menu-context';
import { menuItems } from '@/config/menu-config';

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export function MenuProvider({ children }: { children: ReactNode }) {
    const router = useRouter();
    const [activeItem, setActiveItem] = useState(menuItems[0]?.id || 'projects');

    const validIds = menuItems.map(item => item.id);

    useEffect(() => {
        const section = router.query.section as string;
        if (section && validIds.includes(section)) {
            setActiveItem(section);
        } else if (router.isReady && !router.query.section) {
            router.replace(`/?section=${menuItems[0]?.id}`, undefined, { shallow: true });
        }
    }, [router.query.section, router.isReady]);

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
