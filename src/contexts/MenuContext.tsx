import { createContext, useContext, useState, ReactNode } from 'react';

type MenuContextType = {
    activeItem: string;
    setActiveItem: (item: string) => void;
};

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export function MenuProvider({ children }: { children: ReactNode }) {
    const [activeItem, setActiveItem] = useState('ventures');

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
