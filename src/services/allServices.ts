import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import users from './users.json';

@Injectable()

export class AllServices {

    public userList: {name: string, email: string, password: string}[] = users;


    constructor(private http: HttpClient) {

    }

    getLogIn() {
        return this.userList;

    }
}
