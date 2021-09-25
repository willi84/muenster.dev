import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'muensterhack';
  isLoggedIn = false;
  menu = [
    {title: 'Home', icon: 'home', link: 'home'},
    {title: 'Overview', icon: 'explore', link: 'overview'},
    {title: 'Match', icon: 'favorite', link: 'match'},
    {title: 'Dashboard', icon: 'assessment', link: 'dashboard'},
    {title: 'Login ', icon: 'input', link: 'login', isLogin: false},
    {title: 'Logout', icon: 'input', isLogin: true},
  ]
}
