import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

import { PloggingDetails } from "~/app/shared/components/plogging-details.component";
import { RacesService } from "~/app/shared/services/races.service";

@Component({
    selector: "RaceDetail",
    templateUrl: "./race-detail.component.html"
})
export class RaceDetailComponent extends PloggingDetails implements OnInit {

    constructor(
        protected _dataService: RacesService,
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
