import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value: any;
  title = 'address-project';
  test = 'test code';
  name?: string;
  age: string = "";
  gender : string = "";
  addr1 : string = "";
  addr2 : string = "";
  city : string = "";
  pincode : string = "";
  state : string = "";
  country : string = "";
  showFinalResult : boolean= false;

  showChildComponent(e: any) {
    console.log(e);
    this.showFinalResult = true;
    this.name = e.nameForm;
    this.age = e.ageForm;
    this.gender = e.genderForm;
    this.addr1 = e.address1;
    this.addr2 = e.address2;
    this.pincode = e.pincode;
    this.city = e.city;
    this.state = e.state;
    this.country = e.country;
  }
}
