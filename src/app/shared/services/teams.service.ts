import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Team } from '../business/team.model';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';

@Injectable()
export class TeamsService extends DataService {

    constructor(
        protected http: HttpClient
    ) {
        super(
            http
        );
    }

    public getItems(): Observable<Team[]> {
        return this.getCommonItems<Team>('teams');
    }

    public getItem(id: number) : Observable<Team>{
        return this.getCommonItem(id, 'teams') as Observable<Team>;
    }

    public join(id: number): Observable<any> {
        return this.joinCommon('teams/join/', id);
    }

    public unjoin(id: number): Observable<any>{
        return this.unjoinCommon('teams/unjoin/', id);
    }
}