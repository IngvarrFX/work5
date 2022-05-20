import {SelectDataType} from "../../types/types";
import {v1} from "uuid";

export const selectData: SelectDataType[] = [
    {id: v1(), title: "red"},
    {id: v1(), title: "blue"},
    {id: v1(), title: "green"},
    {id: v1(), title: "white"},
    {id: v1(), title: "black"},
    {id: v1(), title: "orange"},
];
