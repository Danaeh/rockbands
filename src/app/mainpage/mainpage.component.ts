import { Component, Input } from '@angular/core';

@Component({
  selector: 'mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})


export class Mainpage {
  @Input() title:string;
  @Input() subtitle:string;
}
