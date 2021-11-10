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
  formData : any;
  showFinalResult : boolean= false;

  showChildComponent(e: any) {
    console.log(e);
    this.formData = e;
    this.showFinalResult = true;    
    
  }
}
