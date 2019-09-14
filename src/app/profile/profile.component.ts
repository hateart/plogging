import { Component, OnInit } from "@angular/core";

import { MembersService } from "../shared/services/members.service";

@Component({
    selector: "Profile",
    templateUrl: "./profile.component.html"
})
export class ProfileComponent implements OnInit {

    constructor(
        private _dataService: MembersService,
    ) {

    }

    ngOnInit(): void {


    }
}
