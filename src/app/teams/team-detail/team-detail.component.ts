import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

import { PloggingDetails } from "~/app/shared/components/plogging-details.component";
import { TeamsService } from "~/app/shared/services/teams.service";

@Component({
    selector: "TeamDetail",
    templateUrl: "./team-detail.component.html"
})
export class TeamDetailComponent extends PloggingDetails implements OnInit {

    constructor(
        protected _dataService: TeamsService,
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
