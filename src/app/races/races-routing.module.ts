import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { RacesComponent } from "./races.component";
import { RaceDetailComponent } from "./race-detail/race-detail.component";

const routes: Routes = [
    { path: "default", component: RacesComponent },
    { path: "race/:id", component: RaceDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class RacesRoutingModule { }
