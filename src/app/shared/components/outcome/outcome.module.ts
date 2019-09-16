import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { OutcomeComponent } from './outcome.component';

@NgModule({
    imports: [
        NativeScriptCommonModule
    ],
    exports: [
        OutcomeComponent,
    ],
    declarations: [
        OutcomeComponent,
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class  OutcomeModule { }