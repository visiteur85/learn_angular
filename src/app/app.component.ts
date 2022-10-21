import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

isAppLoading = false;

constructor() {
  setTimeout(()=>{
    this.isAppLoading = true
  },1000)
}}
