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
  private readonly detailsService = inject(ProfileDetails);

  // Signals para la vista
  protected readonly education = this.detailsService.education;
  private readonly allSkills = this.detailsService.skills;

  // Estado derivado usando computed() según tus buenas prácticas
  protected readonly techSkills = computed(() => 
    this.allSkills().filter(s => s.category === 'Tech')
  );
}