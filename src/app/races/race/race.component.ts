import { Component, OnInit, Input } from "@angular/core";
import { Race } from "~/app/shared/business/race.model";


@Component({
    selector: "Race",
    templateUrl: "./race.component.html"
})
export class RaceComponent implements OnInit {

    @Input() item: Race;

    constructor() { }

    ngOnInit() { }
}
