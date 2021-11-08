import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent {
  formInstance: FormGroup;
  @Output() newItemEvent = new EventEmitter();

  constructor() {
    this.formInstance = new FormGroup({
      nameForm: new FormControl('', Validators.required),
      ageForm: new FormControl('', Validators.required),
      genderForm: new FormControl(''),
      address1: new FormControl(''),
      address2: new FormControl(''),
      city: new FormControl(''),
      pincode: new FormControl(''),
      state: new FormControl(''),
      country: new FormControl(''),
   })
  }

 save() { 
   
   this.newItemEvent.emit(this.formInstance.value);
   
 }

}
