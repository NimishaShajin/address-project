import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators ,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit{
  formInstance: any;
  @Output() newItemEvent = new EventEmitter();
 

  constructor(public form: FormBuilder) {}
  ngOnInit(): void {
    this.buildForm();
  }
  
  buildForm(){
    this.formInstance = this.form.group({
        nameForm: [''],
        ageForm: [''],
        genderForm: [''],
        address1: [''],
        address2: [''],
        city: [''],
        pincode: [''],
        state: [''],
        country: ['']
     })
  }

 save() { 

   this.newItemEvent.emit(this.formInstance.value);

 }

}
