import { Component, OnInit, Input } from "@angular/core";
import { Member } from "~/app/shared/business/member.model";


@Component({
    selector: "Runner",
    templateUrl: "./runner.component.html"
})
export class RunnerComponent implements OnInit {

    @Input() item: Member;

    constructor() { }

    ngOnInit() { }
}
