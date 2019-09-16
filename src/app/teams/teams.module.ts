import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { TeamsRoutingModule } from "./teams-routing.module";
import { TeamsComponent } from "./teams.component";
import { TeamDetailComponent } from "./team-detail/team-detail.component";
import { TeamsService } from "../shared/services/teams.service";
import { OutcomeModule } from "../shared/components/outcome/outcome.module";
import { SimpleInfoModule } from "../shared/components/simple-info/simple-info.module";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        TeamsRoutingModule,
        OutcomeModule,
        SimpleInfoModule,
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
