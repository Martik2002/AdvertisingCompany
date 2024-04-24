import { Routes, RouterModule } from '@angular/router';
import {NgModule} from "@angular/core";
import {HomeComponent} from "./UI/home/home.component";
import {LoginModul} from "./UI/login/login.modul";
import {LoginComponent} from "./UI/login/login/login.component";
import {AppComponent} from "./app.component";
import {AuthorizeGuard} from "./UI/login/Auth/AuthorizeGuard";

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
        canActivate: [AuthorizeGuard]

    },
    {
        path:'buyAll',
        loadChildren: () => import("./UI/buy/buy.module").then(m => m.BuyModule),
        canActivate: [AuthorizeGuard]

    },
    {
        path:'agent',
        loadChildren: () => import("./UI/agent-pages/AgentPages.modul").then(m => m.AgentPagesModul),
        canActivate: [AuthorizeGuard]

    },
    {
        path:'auth',
        loadChildren: () => import("./UI/login/login.modul").then(m => m.LoginModul),

    },
  {
        path:'about',
        loadChildren: () => import("./UI/about/AboutModul").then(m => m.AboutModul),

    },
    {
        path: '**',
        component: HomeComponent,
        canActivate: [AuthorizeGuard]

    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
