import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {ModalModule} from 'ngx-bootstrap/modal';
import {AppComponent} from './app.component';
import {AuthorizeInterceptor} from 'src/api-authorization/authorize.interceptor';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppMaterialModule} from "./app-material.model";
import {NavMenuComponent} from "./UI/nav-menu/nav-menu.component";
import {AppRoutingModule} from "./router-modul";
import {HomeComponent} from "./UI/home/home.component";
import {BaseHelperCompannet} from "./Core/Helper/BaseHelperCompannet";
import {FormBaseComponent} from "./Core/Helper/FormBaseComponent";
import {LoginModul} from "./UI/login/login.modul";

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        BaseHelperCompannet,
        FormBaseComponent,
        
    ],
    imports: [
        BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        ModalModule.forRoot(),
        AppMaterialModule,
        AppRoutingModule,
        LoginModul,
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
