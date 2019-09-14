import { Component, OnInit } from "@angular/core";

import { PloggingComponent } from "../shared/components/plogging.component";
import { MembersService } from "../shared/services/members.service";

@Component({
    selector: "Runners",
    templateUrl: "./runners.component.html"
})
export class RunnersComponent extends PloggingComponent implements OnInit {

    constructor(
        protected _dataService: MembersService,
    ) {
        super(
            _dataService
        );
    }
}
