# reducers

This folder contains application state definition as well as reducers which change applications state based on the result of different actions. The `rootReducer` combines all of the reducers into one in order to setup Redux.

```
export function getNameReducer(state: NameData = { name: "DefaultName" }, action: any): NameData {
    switch (action.type) {
        case ACTION_TYPE:
            return { name: action.payload };
        default:
            return state;
    }
}
```
Example reducer called `getNameReducer` exports a function that accepts the state of the reducer and an action that finished and returns an altered state, based on the type and result of the action.