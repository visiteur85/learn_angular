import {Component, Input, OnInit} from '@angular/core';
import {Address} from "../parent.component";

@Component({
  selector: 'inst-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  name = "Lesha"
  @Input() surName?:string
  @Input() adress?:Address

}
