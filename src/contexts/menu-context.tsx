import { createContext, useContext, useState, ReactNode } from 'react';
import { IMenuContextType } from '@/types/contexts/menu-context';


const MenuContext = createContext<IMenuContextType | undefined>(undefined);

export function MenuProvider({ children }: { children: ReactNode }) {
    const [activeItem, setActiveItem] = useState('projects');

    return (
        <MenuContext.Provider value={{ activeItem, setActiveItem }}>
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
