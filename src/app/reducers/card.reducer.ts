import { CardDetails } from '../model/card-details.model';
import * as CardActions from '../actions/card.actions';

export function reducer(state: CardDetails[] = [], action: CardActions.Actions) {
    console.log(state);
    console.log(action);
    switch(action.type) {
        case CardActions.ADD_DETAIL:
            return [...state, action.payload];
        default:
            return state;
    }
}