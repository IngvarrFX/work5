import {createContext} from "react";

export type ShopType = {
    id: string
    number: number
    name: string
    address: string
}

export const InitialAppContext: ShopType[] = [
    {
        id: "1",
        number: 12345,
        name: "Дипломная работа",
        address: "http://www.work5.ru/services",
    },
    {
        id: "2",
        number: 12346,
        name: "Дипломная работа",
        address: "http://www.work5.ru/services",
    },
];

export const AppCtx = createContext<ShopType[] | null>(null)
