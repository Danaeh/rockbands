import { Component, Input } from '@angular/core';

@Component({
  selector: 'aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})


export class Aside {
  title:string="Biografia";
  @Input() imagesource:any;
  @Input() imagecommentary:any;
  @Input() Biography:string;
  @Input() linksource:any;



}
