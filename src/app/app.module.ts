import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { Header } from './header/header.component';
import { Home } from './home/home.component';
import { Foo } from './foo/foo.component';
import { Bar } from './bar/bar.component';
import { Beatles } from './beatles/beatles.component';
import { Queen } from './queen/queen.component';
import { Rollings } from './rollings/rollings.component';
import { Mainpage } from './mainpage/mainpage.component';
import { Aside } from './aside/aside.component';

@NgModule({
  declarations: [
    AppComponent,
    Header,
    Home,
    Foo,
    Bar,
    Queen,
    Beatles,
    Rollings,
    Mainpage,
    Aside
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
