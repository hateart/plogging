import { Component, OnInit } from "@angular/core";
import { DataService, IDataItem } from "../shared/data.service";

@Component({
    selector: "Races",
    templateUrl: "./races.component.html"
})
export class RacesComponent implements OnInit {

    items: Array<IDataItem>;

    constructor(private _itemService: DataService) { }

    ngOnInit(): void {
        this.items = this._itemService.getItems();
    }
}
