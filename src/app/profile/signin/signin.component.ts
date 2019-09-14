import { Component, OnInit } from "@angular/core";

import { MembersService } from "../../shared/services/members.service";
import { RouterExtensions } from "nativescript-angular";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "Signin",
    templateUrl: "./signin.component.html"
})
export class SigninComponent implements OnInit {

    public loading: boolean = false;


    constructor(
        private _dataService: MembersService,
        private _routerExtensions: RouterExtensions,
        private _activeRoute: ActivatedRoute
    ) {

    }

    ngOnInit(): void {

    }

    onBackTap(): void {
        this._routerExtensions.back();
    }

    login() {
        console.log('login tap');

        this._routerExtensions.navigate(
            ["../default"],
            { relativeTo: this._activeRoute }
         );

       // this._routerExtensions.navigate(["/home"], { clearHistory: true });
        /*
        this._dataService.login(this.user)
            .then(() => {
                this.loading = false;
                this.routerExtensions.navigate(["/home"], { clearHistory: true });
            })
            .catch(() => {
                this.loading = false;
                this.alert("Unfortunately we could not find your account.");
            });
        */
    }

    public alert(message: string) {
        return alert({
            title: "Plogging",
            okButtonText: "OK",
            message: message
        });
    }
}
