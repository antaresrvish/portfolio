export interface IService {
    title: string;
    price: number;
}
export interface ITwoService {
    services: IService[];
    bookCallLink?: string;
    emailLink?: string;
}
