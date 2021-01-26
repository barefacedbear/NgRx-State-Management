import { CardDetails } from "./model/card-details.model";

export interface AppState {
    readonly details: CardDetails[];
}