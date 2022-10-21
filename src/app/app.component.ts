import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = "instagram";
  text=''


  changeTitleHandler = () => {
    this.title = 'it-incubator'
  };

  changeInputHandler = (event:Event)=> {
    console.log((event.currentTarget as HTMLInputElement).value)
    this.text = (event.currentTarget as HTMLInputElement).value
  }


}
