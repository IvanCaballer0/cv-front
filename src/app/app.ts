import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WhoAmI } from './features/who-am-i/who-am-i';
import { Profile } from './features/profile/profile';
import { ProjectsComponent } from './features/projects/projects';
import { Footer } from './layout/footer/footer';
import { Header } from './layout/header/header';
import { signal } from '@angular/core';
import { NavitecLogo } from './shared/navitec-logo/navitec-logo';


@Component({
  selector: 'app-root',
  imports: [WhoAmI, Profile, ProjectsComponent, Footer, Header, NavitecLogo],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'role': 'main',
    'class': 'main-content'
  }
})
export class App {
  isLoaded = signal(false);

  constructor() {
    setTimeout(() => {
      this.isLoaded.set(true);
    }, 10000);
  }
}
