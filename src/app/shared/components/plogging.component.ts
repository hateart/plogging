import { Subscription} from 'rxjs';
import { DataService } from '../services/data.service';
import { Item } from '../business/item.model';
import { StorageService } from '../services/storage.service';

export abstract class PloggingComponent{

    public items: Array<Item> = [];
    public loading: boolean = true;
    private _userSubscription: Subscription;

    constructor(
        protected _dataService: DataService,
        protected _storageService: StorageService
    ) { }

    ngOnInit(): void {

        this._userSubscription = this._storageService.getLoggedUser().subscribe(user => {
            if (user) {
                console.log(user);
                console.log('logged user: ' + user.id);
            }
        });

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
