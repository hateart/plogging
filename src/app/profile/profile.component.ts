import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { MembersService } from "../shared/services/members.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "Profile",
    templateUrl: "./profile.component.html"
})
export class ProfileComponent implements OnInit {

    constructor(
        private _dataService: MembersService,
        private routerExtensions: RouterExtensions,
        private activeRoute: ActivatedRoute
    ) {
       // this.routerExtensions.navigate(["//profileTab:signin/default"], { clearHistory: true });

       /* this.routerExtensions.navigate(
            [{ outlets: { profileTab: ["signin"] } }],
            { relativeTo: this.activeRoute }
         );
        */
    }

    ngOnInit(): void {

    }
}
