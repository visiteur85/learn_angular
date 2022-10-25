import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'inst-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  @Output() sendGradeEvent = new EventEmitter<string>()
  inputGrade = ''
  sendGradehandler() {

    this.sendGradeEvent.emit(this.inputGrade)
  }

}
