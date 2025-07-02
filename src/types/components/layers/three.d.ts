interface IThreeClient {
    id: number;
    text: string;
    avatar?: string;
    author: string;
    projectName: string;
}

export type IThree = IThreeClient[];