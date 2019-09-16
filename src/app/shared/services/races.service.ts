import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

import { Race } from '../business/race.model';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { Outcome } from '../business/outcome.model';

@Injectable()
export class RacesService extends DataService {

    constructor(
        protected http: HttpClient
    ) {
        super(
            http
        );
    }

    public getItems(): Observable<Race[]> {
        return this.getCommonItems<Race>('races');
    }

    public getItem(id: number) : Observable<Race>{
        return this.getCommonItem(id, 'races') as Observable<Race>;
    }

    public getTotal(): Observable<Outcome>{
        return this.http.get<Outcome>(
            this._API_URL  + 'statistics/',
            { headers: this._headers },
        ).pipe(map((res)  => res));
    }

    public join(id: number): Observable<any> {
        return this.joinCommon('races/join/', id);
    }

    public unjoin(id: number): Observable<any>{
        return this.unjoinCommon('races/unjoin/', id);
    }
}