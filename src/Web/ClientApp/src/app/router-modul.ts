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
        path:'buy', 
        loadChildren: () => import("./UI/buy/buy.module").then(m => m.BuyModule)
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
