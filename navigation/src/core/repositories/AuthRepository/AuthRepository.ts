import asyncStorage from "@react-native-async-storage/async-storage";
import { User } from "../../entities";

const SESSION_KEY =  `@USER_LOGGED_IN`;

export const AuthRepository = {
    save: async (user: User) : Promise<void> => {
        asyncStorage.setItem(SESSION_KEY, JSON.stringify(user));
    },
    get: async () : Promise<User | null> => {
        const userData = await asyncStorage.getItem(SESSION_KEY);
        return userData ? JSON.parse(userData) : null;

    },
    delete: () : void => {
        asyncStorage.removeItem(SESSION_KEY);
    }

};