import { Action, ACTION_TYPE } from "../actions";

export interface NameData {
    name: string;
}

export function getNameReducer(state: NameData = { name: "DefaultName" }, action: any): NameData {
    switch (action.type) {
        case ACTION_TYPE:
            return { name: action.payload };
        default:
            return state;
    }
}
