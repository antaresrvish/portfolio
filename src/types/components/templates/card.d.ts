interface ICard {
    iconUrl?: string;
    title: string;
    description: string;
    photoUrl: string;
    link: string;
}

export type ICardArray = ICard[];