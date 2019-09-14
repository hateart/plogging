import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

import { PloggingDetails } from "~/app/shared/components/plogging-details.component";
import { MembersService } from "~/app/shared/services/members.service";

@Component({
    selector: "RunnerDetail",
    templateUrl: "./runner-detail.component.html"
})
export class RunnerDetailComponent extends PloggingDetails implements OnInit {

    constructor(
        protected _dataService: MembersService,
        protected _route: ActivatedRoute,
        protected _routerExtensions: RouterExtensions
    ) {
        super(
            _dataService,
            _route,
            _routerExtensions,
        );
    }


}
