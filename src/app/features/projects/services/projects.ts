import { Injectable, signal } from '@angular/core';
import { Project } from '../models/project';

@Injectable()
export class Projects {
  projectsState = signal<Project[]>([
    {
      id: '1',
      title: 'Angular Portfolio v21',
      description: 'Web personal desarrollada con Signals, Control Flow nativo y arquitectura basada en features.',
      technologies: ['Angular', 'TypeScript', 'CSS3'],
      imageUrl: 'assets/projects/portfolio.webp'
    },
    {
      id: '2',
      title: 'Network Security Scanner',
      description: 'Herramienta en Python para detección de vulnerabilidades en redes locales.',
      technologies: ['Python', 'Cybersecurity', 'Linux'],
      imageUrl: 'assets/projects/security.webp'
    }
  ]);

  projects = this.projectsState.asReadonly();
}