import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { TeamsRoutingModule } from "./teams-routing.module";
import { TeamsComponent } from "./teams.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        TeamsRoutingModule
    ],
    declarations: [
        TeamsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class TeamsModule { }
