export interface IMenu {
    id: string;
    title: string;
    component: ComponentType<any>;
}

export type IMenuItem = Menu[];