import {Component} from '@angular/core';

export interface Address {
  city: string
  str: string
  home: number
}

@Component({
  selector: 'inst-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  name = 'Pavel'
  surName = 'Ivanov'
  address:Address = {
    city: 'Minsk',
    str: 'Luchini',
    home: 22
  }


}
