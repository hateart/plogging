import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { RacesRoutingModule } from "./races-routing.module";
import { RacesComponent } from "./races.component";
import { RaceDetailComponent } from "./race-detail/race-detail.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        RacesRoutingModule
    ],
    declarations: [
        RacesComponent,
        RaceDetailComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class RacesModule { }
