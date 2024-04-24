import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { RouterModule, Routes } from "@angular/router";
import {AppMaterialModule} from "../../app-material.model";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
    },
]
@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
        AppMaterialModule
    ],
    providers: [
        {provide: MAT_DIALOG_DATA, useValue: {}},
        {provide: MatDialogRef, useValue: {}}
    ],
    exports: [
        LoginComponent
    ]
})
export class LoginModul { }
