import { Item } from "./item.model";
import { Race } from "./race.model";

export interface Member extends Item {
    race_count : number;
    races: Array<Race>;
}