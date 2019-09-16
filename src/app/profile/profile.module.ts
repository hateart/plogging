import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ProfileRoutingModule } from "./profile-routing.module";
import { ProfileComponent } from "./profile.component";
import { MembersService } from "../shared/services/members.service";
import { SigninComponent } from "./signin/signin.component";
import { OutcomeModule } from "../shared/components/outcome/outcome.module";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ProfileRoutingModule,
        OutcomeModule,
    ],
    declarations: [
        ProfileComponent,
        SigninComponent,
    ],
    providers: [
        MembersService,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ProfileModule { }
