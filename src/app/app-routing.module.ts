import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NSEmptyOutletComponent } from "nativescript-angular";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { StorageService } from "./shared/services/storage.service";

const routes: Routes = [
    {
        path: "",
        redirectTo: "/(racesTab:races/default//teamsTab:teams/default//runnersTab:runners/default//profileTab:profile/default)",
        pathMatch: "full"
    },
    {
        path: "races",
        component: NSEmptyOutletComponent,
        loadChildren: () => import(`~/app/races/races.module`).then((m) => m.RacesModule),
        outlet: "racesTab"
    },
    {
        path: "teams",
        component: NSEmptyOutletComponent,
        loadChildren: () => import(`~/app/teams/teams.module`).then((m) => m.TeamsModule),
        outlet: "teamsTab"
    },
    {
        path: "runners",
        component: NSEmptyOutletComponent,
        loadChildren: () => import(`~/app/runners/runners.module`).then((m) => m.RunnersModule),
        outlet: "runnersTab"
    },
    {
        path: "profile",
        component: NSEmptyOutletComponent,
        loadChildren: () => import(`~/app/profile/profile.module`).then((m) => m.ProfileModule),
        outlet: "profileTab"
    },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule],
    providers: [
        StorageService,
    ],
})
export class AppRoutingModule { }
