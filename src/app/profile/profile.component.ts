import { Component, OnInit } from "@angular/core";
import { LoggedComponent } from "../shared/components/logged.component";
import { StorageService } from "../shared/services/storage.service";

@Component({
    selector: "Profile",
    templateUrl: "./profile.component.html"
})
export class ProfileComponent extends LoggedComponent implements OnInit {

    constructor(
        protected _storageService: StorageService
    ) {
        super(
            _storageService
        );
    }

    ngOnInit(): void {

    }

    public signOut()
    {
        console.log('tap sign out');

        if (this.loggedUser)
            this._storageService.removeUser().then(success => {
                this._storageService.user = null;
                console.log('signout');
            }, (err) => {
                console.log(err);
            });
        else
            console.log('no logged user');
    }
}
