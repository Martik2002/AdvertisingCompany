import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { RouterModule, Routes } from "@angular/router";
import {BuyComponent} from "./buy.component";
import {BuyCreateComponent} from "./buy-create/buy-create.component";
import {AppMaterialModule} from "../../app-material.model";
import { BuyTypeComponent } from './buy-type/buy-type.component';
import { RentComponent } from './rent/rent.component';

const routes: Routes = [
    {
        path: '',
        component: BuyComponent,
    },
    {
        path: 'create',
        component: BuyCreateComponent,
    },
    {
        path: 'buy',
        component: BuyTypeComponent,
    },

]
@NgModule({
    declarations: [
        BuyComponent,
        BuyCreateComponent,
        BuyTypeComponent,
        RentComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
        AppMaterialModule
    ],
    providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
    ],
})
export class BuyModule { }
