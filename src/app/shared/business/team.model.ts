import { Item } from "./item.model";
import { Member } from "./member.model";
import { Race } from "./race.model";

export interface Team extends Item {
    race_count : number;
    member_count : number;
    members: Array<Member>;
    races: Array<Race>;
}