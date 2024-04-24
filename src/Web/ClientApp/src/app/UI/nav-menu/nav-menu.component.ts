import {Component} from '@angular/core';
import {RentComponent} from "../buy/rent/rent.component";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {LoginComponent} from "../login/login/login.component";
import {BaseHelperCompannet} from "../../Core/Helper/BaseHelperCompannet";
import {Router} from "@angular/router";

@Component({
    selector: 'app-nav-menu',
    templateUrl: './nav-menu.component.html',
    styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent extends BaseHelperCompannet {
    
    private _logoutDialod: MatDialogRef<LoginComponent>;
    logout: boolean = true;
    constructor(
        private dialog: MatDialog,
        private router: Router,
    ) {
        super();
    }

    openLogoutDialog() {

        this._logoutDialod = this.dialog.open(LoginComponent, {
            width: '500px',
            disableClose: true,
            autoFocus: false
        })
        this._subs.add(
            this._logoutDialod.afterClosed().subscribe((needToUpdate: boolean) => {
                  if (needToUpdate){
                      this.logout = false;
                    this.router.navigate(["auth"]);
                  }
                    this._logoutDialod = undefined
                }
            )
        )
    }

}
