import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import {BaseHelperCompannet} from "./BaseHelperCompannet";

@Component({
    selector: 'form-base',
    template: ""
})
export class FormBaseComponent extends BaseHelperCompannet {

    form: FormGroup;
    submitted: boolean = false;
    errors = []

    maxDate = new Date(Date.now());
    minDate = new Date('1900-01-1');

    constructor(
        protected fb: FormBuilder) {
        super();
    }

    getControl(name: string) {
        return this.form.get(name);
    }

    hasError(name: string, error: string) {
        var e = this.getControl(name);
        return e && (e.dirty || e.touched || this.submitted) && e.hasError(error);
    }

    protected handleError(validationErrors) {
        if (!validationErrors) return;
        Object.keys(validationErrors).forEach(prop => {
            const formControl = this.form.get(prop.charAt(0).toLowerCase() + prop.slice(1));
            if (formControl) formControl.setErrors({ serverError: validationErrors[prop] });
        })
    }

    protected formInvalid() {
        this.submitted = true;
        return this.form.invalid;
    }

    protected transformServerErrors(error) {
        console.log(error)
        if (!error.errors) return;
        this.errors = []
        Object.keys(error.errors).map((key) => {
            this.errors = this.errors.concat(error.errors[key])
        })
    }

    protected setErrorsToControls(error) {
        if (!error.errors) {
            return;
        };
        Object.keys(error.errors).map((key) => {
            let lowerCaseKey = this.capitalizeFirstLetter(key);
            let control = this.form.get(lowerCaseKey);
            this.form.get(lowerCaseKey)?.setErrors({ serverErrors: error.errors[key] });
        })
    }

    private capitalizeFirstLetter = (string) => {
        return string.charAt(0).toLowerCase() + string.slice(1);
    }


}