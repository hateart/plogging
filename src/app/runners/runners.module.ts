import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { RunnersRoutingModule } from "./runners-routing.module";
import { RunnersComponent } from "./runners.component";
import { RunnerDetailComponent } from "./runner-detail/runner-detail.component";
import { MembersService } from "../shared/services/members.service";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        RunnersRoutingModule
    ],
    declarations: [
        RunnersComponent,
        RunnerDetailComponent
    ],
    providers: [
        MembersService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class RunnersModule { }
