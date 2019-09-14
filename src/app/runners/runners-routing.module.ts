import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { RunnersComponent } from "./runners.component";
import { RunnerDetailComponent } from "./runner-detail/runner-detail.component";

const routes: Routes = [
    { path: "default", component: RunnersComponent },
    { path: "runner/:id", component: RunnerDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class RunnersRoutingModule { }
