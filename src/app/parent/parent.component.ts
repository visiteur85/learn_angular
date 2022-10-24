import {Component} from '@angular/core';


@Component({
  selector: 'inst-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  math?:number

  getGrade(value:number) {
    this.math = value

  }
}
