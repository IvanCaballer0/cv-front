import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ProfileService } from './services/profile';

@Component({
  selector: 'app-who-am-i',
  imports: [NgOptimizedImage],
  templateUrl: './who-am-i.html',
  styleUrls: ['./who-am-i.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'feature-container',
    'role': 'region',
    'aria-labelledby': 'who-am-i-title'
  }
})
export class WhoAmI {
  profileService = inject(ProfileService);
  
  // Acceso directo a la signal para el template
  userProfile = this.profileService.profile;
}