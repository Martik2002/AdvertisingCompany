import {Subscription} from "rxjs";
import {Component, OnDestroy} from "@angular/core";

@Component({
    selector: 'base',
    template: ""
})
export class BaseHelperCompannet implements OnDestroy {
    
    protected _subs: Subscription = new Subscription();
    ngOnDestroy() {
        this._subs.unsubscribe();
    }

}