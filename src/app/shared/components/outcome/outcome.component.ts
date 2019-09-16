import { Component, OnInit, Input} from '@angular/core';
import { Outcome } from '../../business/outcome.model';


@Component({
    moduleId: module.id,
    selector: 'Outcome',
    templateUrl: './outcome.component.html',
})

export class OutcomeComponent implements OnInit {


    @Input() item: Outcome;

    constructor() { }

    ngOnInit() { }

}