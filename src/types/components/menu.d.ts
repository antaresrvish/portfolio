interface IMenuItem {
    id: string;
    label: string;
    disabled?: boolean;
}
export interface IMenuProps {
    menuItems?: IMenuItems;
    delay?: number;
    className?: string;
}

export type IMenuItems = IMenuItem[];