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
  

  showChildComponent(e: any) {
    console.log(e);
    this.value = `<p>Name - ${e.nameForm}</p>
    <p>Age - ${e.ageForm}</p>
    <p>Gender - ${e.genderForm}</p>
    <p>Address - ${e.address1}, ${e.address2}, ${e.city}</p>
    <p>Pincode - ${e.pincode}</p>
    <p>State - ${e.state}</p>
    <p>Country - ${e.country}</p>
    `
  }
}
