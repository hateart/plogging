import { Component, OnInit } from "@angular/core";

import { PloggingComponent } from "../shared/components/plogging.component";
import { RacesService } from "../shared/services/races.service";
import { StorageService } from "../shared/services/storage.service";
import { Race } from "../shared/business/race.model";

@Component({
    selector: "Races",
    templateUrl: "./races.component.html"
})
export class RacesComponent extends PloggingComponent implements OnInit {

    public items: Array<Race> = [];

    constructor(
        protected _dataService: RacesService,
        protected _storageService: StorageService,
    ) {
        super(
            _dataService,
            _storageService,
        );
    }

    public getPlannedRaces() : Array<Race> {
        return this.items.filter(item => item.finished == null);
    }

    public getFinishedRaces(): Array<Race> {
        return this.items.filter(item => item.finished != null);
    }
}
