export interface Menu {
    id: string;
    title: string;
    component: ComponentType<any>;
}

export type IMenuItem = Menu[];