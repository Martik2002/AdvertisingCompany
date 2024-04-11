import {NgModule} from "@angular/core";
import {AppMaterialModule} from "../../app-material.model";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AgentPagesComponent} from "./agent-pages.component";
import {BuyComponent} from "../buy/buy.component";
import {BuyCreateComponent} from "../buy/buy-create/buy-create.component";
import {BuyTypeComponent} from "../buy/buy-type/buy-type.component";
import {RentComponent} from "../buy/rent/rent.component";
import { AppComponent } from "src/app/app.component";

export const routes =[
  {
    path:'',
    component: AgentPagesComponent
  }
]

@NgModule({
  declarations: [
      AgentPagesComponent
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
export class AgentPagesModul{}

