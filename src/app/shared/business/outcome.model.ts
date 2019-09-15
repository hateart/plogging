import { Result } from "./result.model";

export interface Outcome {
    total: Result;
    glass: Result;
    plastic: Result;
    metal: Result;
    other: Result;
}