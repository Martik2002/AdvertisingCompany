import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
@Injectable({ providedIn: "root" })

export class AuthorizeGuard implements CanActivate{
    constructor(
        private router: Router,
    ) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        const isLoggedIn = localStorage.getItem('isLoggedIn');

        if (isLoggedIn === 'true') {

            return true
        } else {
            return false
        }

        return true;
    }

}