import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Projects } from './services/projects';

@Component({
  selector: 'app-projects',
  imports: [NgOptimizedImage],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
  providers: [Projects],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'projects-feature',
    'role': 'region',
    'aria-labelledby': 'projects-title'
  }
})
export class ProjectsComponent {
  projectsService = inject(Projects);
  projects = this.projectsService.projects;
}