import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { ProfileComponent } from "./profile.component";
import { SigninComponent } from "./signin/signin.component";

const routes: Routes = [
    { path: "default", component: ProfileComponent },
    { path: "signin", component: SigninComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ProfileRoutingModule { }
