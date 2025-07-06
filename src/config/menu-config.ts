import { IMenuLayer } from '@/types/contexts/menu-context';
import One from '@/components/layers/one';
import Two from '@/components/layers/two';
import Three from '@/components/layers/three';
import Four from '@/components/layers/four';
import Five from '@/components/layers/five';

export const menuConfig: IMenuLayer[] = [
    {
        id: "projects",
        title: "Projeler",
        component: One
    },
    {
        id: "services", 
        title: "Hizmetler",
        component: Two
    },
    {
        id: "clients",
        title: "Müşteriler", 
        component: Three
    },
    {
        id: "techstack",
        title: "Teknolojiler",
        component: Four
    },
    {
        id: "connect",
        title: "İletişim",
        component: Five
    }
];

export const dataKeyMapping: Record<string, string> = {
    'projects': 'projectData',
    'services': 'serviceData', 
    'clients': 'clientData',
    'techstack': 'techStackData',
    'connect': 'connectData'
};

export const validSectionIds = menuConfig.map(item => item.id);

export const getMenuItemById = (id: string): IMenuLayer | undefined => {
    return menuConfig.find(item => item.id === id);
};

export const addMenuItem = (item: IMenuLayer): void => {
    if (!menuConfig.find(existing => existing.id === item.id)) {
        menuConfig.push(item);
    }
};

export const removeMenuItem = (id: string): boolean => {
    const index = menuConfig.findIndex(item => item.id === id);
    if (index > -1) {
        menuConfig.splice(index, 1);
        return true;
    }
    return false;
};
