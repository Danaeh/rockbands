import { Component } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

const menu: string= ['Home','Queen','The Beatles','Rollings','Foo','Bar']
export class Header {
  public menu:Array<string>
}
