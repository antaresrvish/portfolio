export interface IMenuLayerConfig {
    [key: string]: {
        component: ReactNode;
        data?: any;
    };
}

export interface IMenuLayerProps {
    layerConfig?: MenuLayerConfig;
}