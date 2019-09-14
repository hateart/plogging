import { Item } from "./item.model";

export interface Team extends Item {
    race_count : number;
    member_count : number;
}