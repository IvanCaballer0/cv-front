import { Injectable, signal } from '@angular/core';
import { Skill, Education } from '../models/profile-details';

@Injectable()
export class ProfileDetails {
  education = signal<Education[]>([
    {
      degree: 'Ingeniería de Sistemas y Computación',
      institution: 'Universidad de los Andes',
      year: '2024 - En curso',
      highlights: [
        'Enfoque en soluciones seguras (OWASP)',
        'Arquitectura escalable',
        'Optimización de flujos con IA'
      ]
    },
    {
      degree: 'Diplomado en Tecnologías Front-end',
      institution: 'Universidad Santo Tomas',
      year: '2021',
      highlights: [
        'Desarrollo de interfaces',
        'Estándares web'
      ]
    }
  ]);

  skills = signal<Skill[]>([
    {
      name: 'Angular (v21+)',
      level: 'Advanced',
      category: 'Tech'
    },
    {
      name: 'TypeScript',
      level: 'Advanced',
      category: 'Tech'
    },
    {
      name: 'Python & Bash',
      level: 'Intermediate',
      category: 'Tech'
    },
    {
      name: 'Model Context Protocol (MCP)',
      level: 'Advanced',
      category: 'Tech'
    },
    { 
      name: 'Cybersecurity (OWASP/NIST)',
      level: 'Intermediate',
      category: 'Tech'
    },
    {
      name: 'Prompt Engineering',
      level: 'Advanced',
      category: 'Tech'
    }
  ]);
}