import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WhoAmI } from './features/who-am-i/who-am-i';
import { Profile } from './features/profile/profile';
import { ProjectsComponent } from './features/projects/projects';
import { Footer } from './layout/footer/footer';


@Component({
  selector: 'app-root',
  imports: [WhoAmI, Profile, ProjectsComponent, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'role': 'main',
    'class': 'main-content'
  }
})
export class App {}
