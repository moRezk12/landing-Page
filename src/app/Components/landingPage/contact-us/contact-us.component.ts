import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  name = '';
  phone = '';
  message = '';

  constructor(){
    // console.log(this.name);
    // console.log(this.phone);
    // console.log(this.message);

  }

  isRtl(): boolean {
    return document.documentElement.dir === 'rtl';
  }

  send(){
    console.log(this.name);
    console.log(this.phone);
    console.log(this.message);
  }

}
