import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.scss']
})
export class CompComponent {
@Input() component!: any;
public data = {id: '21321dds', username: 'guest'}
}
