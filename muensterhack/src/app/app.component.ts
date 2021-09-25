import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'muensterhack';
  menu = [
    {title: 'Home', icon: 'home', link: ''},
    {title: 'Login', icon: 'input', link: 'login'},
    {title: 'Overview', icon: 'explore', link: 'overview'},
    {title: 'Dashboard', icon: 'dashboard', link: 'dashboard'},
    // {title: 'Logout', icon: 'input'},
  ]
}
