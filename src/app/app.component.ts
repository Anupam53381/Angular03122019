import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template:`
            <router-outlet> </router-outlet>   
            `
        ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user-front-end';
  message='Welcome to Angular'
}
