import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { SimpleInfoComponent } from './simple-info.component';

@NgModule({
    imports: [
        NativeScriptCommonModule
    ],
    exports: [
        SimpleInfoComponent,
    ],
    declarations: [
        SimpleInfoComponent,
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class  SimpleInfoModule { }