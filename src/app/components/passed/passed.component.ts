import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-passed',
  templateUrl: './passed.component.html',
  styleUrls: ['./passed.component.scss']
})
export class PassedComponent {
  @Input() id!: any;
  @Input() username!: any;
}
