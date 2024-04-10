import {Subscription} from "rxjs";
import {Component, OnDestroy} from "@angular/core";
import {FormBuilder} from "@angular/forms";

@Component({
    selector: 'base',
    template: ""
})
export class BaseHelperCompannet implements OnDestroy {
    
    protected _subs: Subscription = new Subscription();

    constructor() {
    }

    ngOnDestroy() {
        this._subs.unsubscribe();
    }

}