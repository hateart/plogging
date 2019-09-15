import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

import { Member } from '../business/member.model';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { User } from '../business/user.model';

@Injectable()
export class MembersService extends DataService {

    private _KEY = 'user';

    constructor(
        protected http: HttpClient
    ) {
        super(
            http
        );
    }

    public getItems(): Observable<Member[]> {
        return this.getCommonItems<Member>('members');
    }

    public getItem(id: number) : Observable<Member> {
        return this.getCommonItem(id, 'members') as Observable<Member>;
    }

    public login(login:string, password:string) : Observable<any> {
        return this.http.post<User>(
            this._API_URL  + 'members/login',
            {
                login: login,
                password: password
            },
            { headers: this._headers },
        ).pipe(map((res)  => res));
    }

    public join(id: number): Observable<any> {
        throw new Error('This method is virtual');
    }

    public unjoin(id: number): Observable<null>{
        throw new Error('This method is virtual');
    }
}