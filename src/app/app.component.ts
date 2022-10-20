import { Component } from '@angular/core';

interface IUser  {
  name:string,
  age:number

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular_learn';

  first = 'instagram';
  obj:IUser = {
    name: 'Pavel',
    age:34
  }
}
