import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {PopupService} from "../services/popup.service";
import {PopupDataInterface} from "../models/popup-data.interface";


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
public config: PopupDataInterface;

constructor(@Inject(MAT_DIALOG_DATA) public data:PopupDataInterface, private popupService: PopupService) {
this.config = this.data
}

  public onActionEvent(action: boolean){

    this.popupService.closePopup(action)
  }

}
