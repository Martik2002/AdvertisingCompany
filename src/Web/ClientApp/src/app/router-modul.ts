﻿import { Routes, RouterModule } from '@angular/router';
import {NgModule} from "@angular/core";
import {HomeComponent} from "./UI/home/home.component";

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent, pathMatch: 'full'
    },

    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path:'buyAll',
        loadChildren: () => import("./UI/buy/buy.module").then(m => m.BuyModule)
    },    {
        path:'agent',
        loadChildren: () => import("./UI/agent-pages/AgentPages.modul").then(m => m.AgentPagesModul)
    },
    {
        path: '**',
        component: HomeComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
