import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './canal/home/home.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { CanalModule } from './canal/canal.module';

@NgModule({
  declarations: [
    AppComponent,
    //HomeComponent,
    //NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CanalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
