import { Component } from '@angular/core';
import { WhoAmI } from './features/who-am-i/who-am-i';
import { Profile } from './features/profile/profile';


@Component({
  selector: 'app-root',
  imports: [WhoAmI, Profile],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
