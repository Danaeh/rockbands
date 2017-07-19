import { Component } from '@angular/core';
import { Header } from '../header/header.component';
@Component({
  selector: 'bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class Bar {
  title = 'app';
}
