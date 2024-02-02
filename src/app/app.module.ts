import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import { CompComponent } from './components/comp/comp.component';
import { HtmlComponent } from './components/html/html.component';
import {PopupComponent} from "./popup/popup.component";
import {TextComponent} from "./components/text/text.component";
import { PassedComponent } from './components/passed/passed.component';

@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
    TextComponent,
    CompComponent,
    HtmlComponent,
    PassedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
