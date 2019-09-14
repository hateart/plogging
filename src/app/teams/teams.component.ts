import { Component, OnInit } from "@angular/core";

import { PloggingComponent } from "../shared/components/plogging.component";
import { TeamsService } from "../shared/services/teams.service";
import { StorageService } from "../shared/services/storage.service";

@Component({
    selector: "Teams",
    templateUrl: "./teams.component.html"
})
export class TeamsComponent extends PloggingComponent implements OnInit {

    constructor(
        protected _dataService: TeamsService,
        protected _storageService: StorageService,
    ) {
        super(
            _dataService,
            _storageService,
        );
    }
}
