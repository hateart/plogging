import { DataService } from '../services/data.service';
import { Item } from '../business/item.model';
import { ActivatedRoute, Params } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { LoggedComponent } from './logged.component';
import { StorageService } from '../services/storage.service';

export abstract class PloggingDetails extends LoggedComponent {

    public item: Item;
    public loading: boolean = true;

    constructor(
        protected _dataService: DataService,
        protected _route: ActivatedRoute,
        protected _routerExtensions: RouterExtensions,
        protected _storageService: StorageService,
    ) {
        super(
            _storageService
        );
    }

    ngOnInit(): void {

        this.loading = true;

        this._route.params
        .subscribe((params: Params) => {
            this._fetchItem(params['id']);
        });
    }

    protected _fetchItem(id: number) {
        this._dataService.getItem(id)
        .subscribe(res => {
            this.item = res;
            console.log(this.item);
            this.loading = false;
        }, (error) => {
            console.log(error);
        });
    }

    public onBackTap(): void {
        this._routerExtensions.back();
    }

    public join(id: number) {
        this.loading = true;
        this._dataService.join(id)
        .subscribe(() => {
           this._fetchItem(id);
        },
        (error) => {
            console.log(error);
            this.loading = false;
        }
        );
    }

    public unjoin(id: number) {
        this.loading = true;
        this._dataService.unjoin(id)
        .subscribe(() => {
           this._fetchItem(id);
        },
        (error) => {
            console.log(error);
            this.loading = false;
        }
        );
    }
}
