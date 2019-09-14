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
            this._dataService.getItem(params['id'])
                .subscribe(res => {
                    this.item = res;
                    console.log(this.item);
                    this.loading = false;
                }, (error) => {
                    console.log(error);
                });
        });
    }

    onBackTap(): void {
        this._routerExtensions.back();
    }
}
