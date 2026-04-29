import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WhoAmI } from './features/who-am-i/who-am-i';
import { Profile } from './features/profile/profile';
import { ProjectsComponent } from './features/projects/projects';


@Component({
  selector: 'app-root',
  imports: [WhoAmI, Profile, ProjectsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'role': 'main',
    'class': 'main-content'
  }
})
export class App {}
