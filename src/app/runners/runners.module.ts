import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { RunnersRoutingModule } from "./runners-routing.module";
import { RunnersComponent } from "./runners.component";
import { RunnerDetailComponent } from "./runner-detail/runner-detail.component";
import { MembersService } from "../shared/services/members.service";
import { SimpleInfoModule } from "../shared/components/simple-info/simple-info.module";
import { RunnerComponent } from "./runner/runner.component";
import { OutcomeModule } from "../shared/components/outcome/outcome.module";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        RunnersRoutingModule,
        OutcomeModule,
        SimpleInfoModule,
    ],
    declarations: [
        RunnersComponent,
        RunnerDetailComponent,
        RunnerComponent,
    ],
    providers: [
        MembersService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class RunnersModule { }
