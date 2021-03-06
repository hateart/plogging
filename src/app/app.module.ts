import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from "./shared/helpers/jwt.interceptor";
import { ErrorInterceptor } from "./shared/helpers/error.interceptor";
import { OutcomeModule } from "./shared/components/outcome/outcome.module";
import { SimpleInfoModule } from "./shared/components/simple-info/simple-info.module";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpClientModule,
        OutcomeModule,
        SimpleInfoModule,
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
