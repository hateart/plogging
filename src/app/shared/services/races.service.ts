import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Race } from '../business/race.model';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';

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
}