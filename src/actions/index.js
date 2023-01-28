import history from "../history";


export const firstValue = (value, stateSecond) => {
    history.push(`/${value}To${stateSecond}`);

    return {
        type: "CHANGE_FIRST",
        payload: value
    }
    //history.push(`/`)
}
export const secondValue = (value, stateFirst) => {

    history.push(`/${stateFirst}To${value}`);

    console.log("second", value)
    return {
        type: "CHANGE_SECOND",
        payload: value
    }
}