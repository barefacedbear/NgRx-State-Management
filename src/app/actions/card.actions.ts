import { Action } from '@ngrx/store';
import { CardDetails } from '../model/card-details.model';

export const ADD_DETAIL = '[DETAIL] Add';

export class AddDetail implements Action {
    readonly type = ADD_DETAIL;
    constructor(public payload: CardDetails) {}
}

export type Actions = AddDetail;
