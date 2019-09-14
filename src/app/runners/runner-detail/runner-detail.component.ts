import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

import { PloggingDetails } from "~/app/shared/components/plogging-details.component";
import { MembersService } from "~/app/shared/services/members.service";
import { StorageService } from "~/app/shared/services/storage.service";

@Component({
    selector: "RunnerDetail",
    templateUrl: "./runner-detail.component.html"
})
export class RunnerDetailComponent extends PloggingDetails implements OnInit {

    constructor(
        protected _dataService: MembersService,
        protected _route: ActivatedRoute,
        protected _routerExtensions: RouterExtensions,
        protected _storageService: StorageService,
    ) {
        super(
            _dataService,
            _route,
            _routerExtensions,
            _storageService,
        );
    }


}
