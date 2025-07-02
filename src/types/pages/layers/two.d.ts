interface IService {
    id: number;
    title: string;
    price: number;
}
export interface ITwoService {
    services: IService[];
    bookCallLink?: string;
    emailLink?: string;
}
