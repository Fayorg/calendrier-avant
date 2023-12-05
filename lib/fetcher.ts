import { stat } from "fs";

export const fetcher = (input: URL | RequestInfo, init?: RequestInit | undefined) => fetch(input, init).then(res => res.json().then(data => ({...data, status: res.status})));