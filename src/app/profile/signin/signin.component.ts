import { Component, OnInit, ElementRef, ViewChild  } from "@angular/core";

import { MembersService } from "../../shared/services/members.service";
import { RouterExtensions } from "nativescript-angular";
import { ActivatedRoute } from "@angular/router";
import { User } from "~/app/shared/business/user.model";
import { StorageService } from "~/app/shared/services/storage.service";
import { EventData } from "tns-core-modules/ui/page/page";
import { TextField } from "tns-core-modules/ui/text-field";

@Component({
    selector: "Signin",
    templateUrl: "./signin.component.html"
})
export class SigninComponent implements OnInit {

    @ViewChild("passwordField", {static: false}) passwordField: ElementRef;

    public loading: boolean = false;
    public email: string;
    public password: string;

    constructor(
        private _dataService: MembersService,
        private _routerExtensions: RouterExtensions,
        private _activeRoute: ActivatedRoute,
        private _storageService: StorageService,
    ) {
    }

    ngOnInit(): void {

    }

    onBackTap(): void {
        this._routerExtensions.back();
    }

    public onEmailChange(args: EventData) {
        let textField = args.object as TextField;
        this.email = textField.text;
    }

    public onPasswordChange(args: EventData) {
        let textField = args.object as TextField;
        this.password = textField.text;
    }

    login() {

        this.loading = true;
        console.log('login tap:' + this.email);

        this._dataService.login(
            this.email, this.password
            //'fake1@email.com', 'test'
        )
        .subscribe((user: User) => {
            console.log('fetch items: ' + this._dataService.total);
            console.log(user);

            this._storageService.saveUser(user)
            .then(
                (value) => {
                    console.log("Storage Value: " + value);
                    this.loading = false;
                    this._storageService.user = user;

                    this._routerExtensions.navigate(
                        ["../default"],
                        {
                          relativeTo: this._activeRoute,
                          clearHistory: true
                        }
                     );

                }
            );


        },
        (error) => {

            console.log(error);
            this.loading = false;
            this.alert("Please, check your signin data!");
        }
        );

    }

    public alert(message: string) {
        return alert({
            title: "Plogging",
            okButtonText: "OK",
            message: message
        });
    }

    focusPassword() {
        this.passwordField.nativeElement.focus();
    }
}
