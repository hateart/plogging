import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { TeamsRoutingModule } from "./teams-routing.module";
import { TeamsComponent } from "./teams.component";
import { TeamDetailComponent } from "./team-detail/team-detail.component";
import { TeamsService } from "../shared/services/teams.service";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        TeamsRoutingModule
    ],
    declarations: [
        TeamsComponent,
        TeamDetailComponent
    ],
    providers: [
        TeamsService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class TeamsModule { }
