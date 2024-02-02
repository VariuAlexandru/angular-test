import { Component } from '@angular/core';
import {PopupService} from "./services/popup.service";
import {MatDialog} from "@angular/material/dialog";
import {PopupComponent} from "./popup/popup.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-test';
  constructor(private popupService: PopupService) {
  }

 public  openPopup(type: string): void {

    this.popupService.openPopup(type)
  }
}
