import { Component, inject, computed, ChangeDetectionStrategy } from '@angular/core';
import { ProfileDetails } from './services/profile-details';

@Component({
  selector: 'app-profile',
  providers: [ProfileDetails],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'profile-section',
    'role': 'article'
  }
})
export class Profile {
  detailsService = inject(ProfileDetails);

  education = this.detailsService.education;
  allSkills = this.detailsService.skills;

  techSkills = computed(() => 
    this.allSkills().filter(s => s.category === 'Tech')
  );
}