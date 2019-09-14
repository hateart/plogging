import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

import { PloggingDetails } from "~/app/shared/components/plogging-details.component";
import { RacesService } from "~/app/shared/services/races.service";
import { StorageService } from "~/app/shared/services/storage.service";

@Component({
    selector: "RaceDetail",
    templateUrl: "./race-detail.component.html"
})
export class RaceDetailComponent extends PloggingDetails implements OnInit {

    constructor(
        protected _dataService: RacesService,
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
