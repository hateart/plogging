import { Component, OnInit, Input} from '@angular/core';
import { Item } from '../../business/item.model';


@Component({
    moduleId: module.id,
    selector: 'SimpleInfo',
    templateUrl: './simple-info.component.html',
})

export class SimpleInfoComponent implements OnInit {


    @Input() item: Item;

    constructor() { }

    ngOnInit() { }

}