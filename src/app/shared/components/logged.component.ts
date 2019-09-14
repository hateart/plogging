import { Subscription} from 'rxjs';
import { User } from '../business/user.model';
import { StorageService } from '../services/storage.service';

export abstract class LoggedComponent{

    protected _userSubscription: Subscription;
    public loggedUser: User|null = null;

    constructor(
        protected _storageService: StorageService
    ) {

        this._userSubscription = this._storageService.getLoggedUser().subscribe((user: User|null) => {
            console.log(user);
                if (user)
                    console.log('logged user: ' + user.id);
                else
                    console.log('no user');
            this.loggedUser = user;
        });

    }
}
