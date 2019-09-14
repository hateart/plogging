import { Item } from "./item.model";

export interface Race extends Item {
    description: string;
    lat : number;
    lng : number;
    started: string;
    finished: string;
    team_count : number;
    member_count : number;
}