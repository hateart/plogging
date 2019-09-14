import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { TeamsComponent } from "./teams.component";
import { TeamDetailComponent } from "./team-detail/team-detail.component";

const routes: Routes = [
    { path: "default", component: TeamsComponent },
    { path: "team/:id", component: TeamDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class TeamsRoutingModule { }
