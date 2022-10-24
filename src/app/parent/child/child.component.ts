import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'inst-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  @Output() sendGradeEvent = new EventEmitter<number>()
  sendGradehandler() {

    const Math = 5
    this.sendGradeEvent.emit(Math)
  }

}
