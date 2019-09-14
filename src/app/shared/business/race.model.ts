import { Item } from "./item.model";
import { Member } from "./member.model";
import { Team } from "./team.model";

export interface Race extends Item {
    lat : number;
    lng : number;
    started: string;
    finished: string;
    team_count : number;
    member_count : number;
    members: Array<Member>;
    teams: Array<Team>;
    joined?: boolean;
}