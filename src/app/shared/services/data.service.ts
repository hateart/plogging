import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Item } from "../business/item.model";


export abstract  class DataService {

    public total: number = null;

    protected _API_URL = 'http://plogging-api.bessia.net/';
    protected _headers : HttpHeaders;

    constructor(
        protected http: HttpClient,
    ) {
        this._headers = new HttpHeaders({
            "Content-Type": "application/vnd.plogging.v1+json",
            "User-Agent" : "{PloggingApp/"
        });
    }

    protected getCommonItems<T extends Item>(endpoint : string) : Observable<T[]>  {

        console.log('fetch items');

        return this.http.get<T[]>(
                this._API_URL + endpoint + '/',
                { headers: this._headers, observe : 'response' },
            ).pipe(map((res: HttpResponse<any>)  => {
                this.fetchTotal(res);
                console.log('total ' + this.total);
               // console.log(res.body);
                return res.body;
            }));
    }

    protected getCommonItem(id: number, endpoint : string) : Observable<Item>{
        return this.http.get<Item>(
            this._API_URL + endpoint + '/' + id,
            { headers: this._headers }
        )
        .pipe(map(res=>res));
    }

    protected fetchTotal(res: HttpResponse<any>) {

        let totalCountHeaderValues = res.headers.getAll("X-total-count");
        if (totalCountHeaderValues) {
            this.total = (totalCountHeaderValues.length > 0) ? parseInt(totalCountHeaderValues[0]) : 0;
            console.log('total ' + this.total);
        } else
            console.log('No X-total-count header!');

    }

    public abstract getItems() : Observable<any[]>;
    public abstract getItem(id: number) : Observable<Item>;
}
