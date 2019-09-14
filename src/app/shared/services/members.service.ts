import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Member } from '../business/member.model';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';

@Injectable()
export class MembersService extends DataService {

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

    public getItem(id: number) : Observable<Member>{
        return this.getCommonItem(id, 'members') as Observable<Member>;
    }
}