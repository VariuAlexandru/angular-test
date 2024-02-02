import {Injectable} from '@angular/core';
import {PopupComponent} from "../popup/popup.component";
import {MatDialog} from "@angular/material/dialog";
import {componentConfigData, htmlConfigData, textConfigData} from "./popup-configs";
import {PopupDataInterface} from "../models/popup-data.interface";


@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor(public dialogRef: MatDialog) {
  }

  public openPopup(type: string): void {
    let data!: PopupDataInterface;

    switch (type) {
      case 'text':
        data = textConfigData;
        break
      case 'component':
        data = componentConfigData;
        break
      case 'html':
        data = htmlConfigData
        break
    }

    this.dialogRef.open(PopupComponent, {
      data: data,
      width: '400px',
      height: '400px'
    })
  }

  public closePopup(action: boolean): void {
    // here can check if cancel or submit was clicked
    this.dialogRef.closeAll()
  }
}
