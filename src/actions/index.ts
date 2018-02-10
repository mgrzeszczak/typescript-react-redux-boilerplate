import axios, { AxiosPromise } from "axios";

const API_URL = "http://localhost:8080";

export const ACTION_TYPE = "ACTION_TYPE";

export interface Action<T> {
    type: string;
    payload: Promise<T>;
}

export function getName(): Action<string> {
    const promise = new Promise<string>((resolve, reject) => {
        resolve("SomeName");
    });
    return {
        type: ACTION_TYPE,
        payload: promise
    };
}
