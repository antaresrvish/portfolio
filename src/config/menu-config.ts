import { ComponentType } from 'react';
import One from '@/components/layers/one';
import Two from '@/components/layers/two';
import Three from '@/components/layers/three';
import Four from '@/components/layers/four';
import Five from '@/components/layers/five';
import Card from '@/components/templates/card';

export interface MenuItem {
    id: string;
    title: string;
    component: ComponentType<any>;
}

export const menuItems: MenuItem[] = [
    { id: "projects", title: "Projeler", component: One },
    { id: "services", title: "Hizmetler", component: Two },
    { id: "clients", title: "Müşteriler", component: Three },
    { id: "techstack", title: "Teknolojiler", component: Four },
    { id: "connect", title: "İletişim", component: Five }
];
