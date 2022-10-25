import {Component} from '@angular/core';


@Component({
  selector: 'inst-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  grades: string[] = ["math: 5", "eng:3"]

  getGrade(value:string) {
    this.grades.push(value)

  }
}
