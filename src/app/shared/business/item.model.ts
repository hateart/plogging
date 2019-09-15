import { Outcome } from "./outcome.model";

export interface Item {
    id: number;
    name: string;
    description: string;
    outcome: Outcome;
}