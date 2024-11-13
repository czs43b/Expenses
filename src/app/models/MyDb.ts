import { DBSchema } from "idb/build/entry.js";

export interface MyDB extends DBSchema {
    'user-store': {
        key: string;
        value: [];
    };
}