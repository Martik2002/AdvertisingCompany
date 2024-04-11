import {Component, OnInit} from '@angular/core';
import {BaseHelperCompannet} from "../../../Core/Helper/BaseHelperCompannet";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {FormBaseComponent} from "../../../Core/Helper/FormBaseComponent";
import {
  AddresValidation, DescreptionValidation,
  OnlyDigitalValidation,
  PriceValidation,
  RequiredValidation,
  TypeValidation
} from "../../../Core/Validator/Validators";
import {ValidationMessages} from "../../../Core/resources/validation-messages";

@Component({
  selector: 'app-buy-create',
  templateUrl: './buy-create.component.html',
  styleUrls: ['./buy-create.component.css']
})
export class BuyCreateComponent extends FormBaseComponent implements OnInit{

  
  V_MSG = ValidationMessages;
  constructor(
      fb:FormBuilder
  ) {
    super(fb);
  }
  
  ngOnInit() {
    this.initialForm()
  }

  /*  upsert(){
      localStorage.setItem("upsert", )
    }
    */
  
  submit(){
    if (this.form.invalid) return
  }
  
  private initialForm() {
      this.form = this.fb.group({
        type: new FormControl('', TypeValidation),
        price: new FormControl('', PriceValidation),
        addres: new FormControl('', AddresValidation),
        descreption: new FormControl('', DescreptionValidation),
      });
    
  }
}
