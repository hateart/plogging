import { Subscription} from 'rxjs';
import { DataService } from '../services/data.service';
import { Item } from '../business/item.model';
import { StorageService } from '../services/storage.service';
import { LoggedComponent } from './logged.component';

export abstract class PloggingComponent extends LoggedComponent {

    public items: Array<Item> = [];
    public loading: boolean = true;

    constructor(
        protected _dataService: DataService,
        protected _storageService: StorageService
    ) {
        super(
            _storageService
        );
     }

    ngOnInit(): void {

        this._dataService.getItems()
        .subscribe((items : Array<Item>) => {
            console.log('fetch items: ' + this._dataService.total);
            this.items = items;
            this.loading = false;
        },
        (error) => {
            console.log('Huston, we have problems');
            console.log(error);
            this.loading = false;
        }
        );

    }
}
