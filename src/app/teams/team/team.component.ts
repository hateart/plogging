import { Component, OnInit, Input } from "@angular/core";
import { Team } from "~/app/shared/business/team.model";


@Component({
    selector: "Team",
    templateUrl: "./team.component.html"
})
export class TeamComponent implements OnInit {

    @Input() item: Team;

    constructor() { }

    ngOnInit() { }
}
