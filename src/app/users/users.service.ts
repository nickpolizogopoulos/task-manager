import { Injectable } from "@angular/core";

import {
    dummy_users,
    type User
} from "../utilities/tools/users";

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    get users(): User[] {
        return [...dummy_users];
    }

}