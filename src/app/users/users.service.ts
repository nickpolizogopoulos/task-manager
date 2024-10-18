import { inject, Injectable } from "@angular/core";

import { dummy_users, type User } from "../utilities/users";
// import { HttpClient } from "@angular/common/http";


@Injectable({
    providedIn: 'root'
})
export class UsersService {

    // private http = inject(HttpClient);

    get users(): User[] {
        return [...dummy_users];
    }

}