import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { RunnersRoutingModule } from "./runners-routing.module";
import { RunnersComponent } from "./runners.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        RunnersRoutingModule
    ],
    declarations: [
        RunnersComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class RunnersModule { }
