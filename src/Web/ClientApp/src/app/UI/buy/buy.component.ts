import {Component, createComponent} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {BuyCreateComponent} from "./buy-create/buy-create.component";
import {BaseHelperCompannet} from "../../Core/Helper/BaseHelperCompannet";

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent extends BaseHelperCompannet{
  private _upsertDialog: MatDialogRef<BuyCreateComponent>;

  constructor(
      private dialog: MatDialog,
  ) {
    super();
  }
   
  openCreateDialog(){
    this._upsertDialog = this.dialog.open(BuyCreateComponent, {
      width: '500px',
      disableClose: true,
      autoFocus: false
    });
    this._subs.add(
        this._upsertDialog.afterClosed().subscribe((needToUpdate: boolean) => {
          //if (needToUpdate) this.loadUniversity(); toDO load date 
          this._upsertDialog = undefined;
        })
    );
  }
}
