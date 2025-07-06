import { ComponentType } from 'react';

export interface IMenuLayer {
    id: string;
    title: string;
    component: ComponentType<any>;
}

export type IMenuContextType = {
    activeItem: string;
    setActiveItem: (item: string) => void;
    menuLayers: IMenuLayer[];
    getActiveLayer: () => IMenuLayer | undefined;
};