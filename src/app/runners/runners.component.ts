import { Component, OnInit } from "@angular/core";

import { PloggingComponent } from "../shared/components/plogging.component";
import { MembersService } from "../shared/services/members.service";
import { StorageService } from "../shared/services/storage.service";

@Component({
    selector: "Runners",
    templateUrl: "./runners.component.html"
})
export class RunnersComponent extends PloggingComponent implements OnInit {

    constructor(
        protected _dataService: MembersService,
        protected _storageService: StorageService,
    ) {
        super(
            _dataService,
            _storageService
        );
    }
}
