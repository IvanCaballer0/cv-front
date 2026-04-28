import { Injectable, signal } from '@angular/core';
import { Skill, Education } from '../models/profile-details';

@Injectable()
export class ProfileDetails {
  // Datos académicos de tu universidad de élite
  readonly education = signal<Education>({
    degree: 'Ingeniería Industrial',
    institution: 'Universidad de Élite', // Aquí pondrás el nombre real
    year: '2025 (Esperado)',
    highlights: ['Enfoque en Optimización', 'Análisis de Sistemas Complejos', 'Excelencia Académica']
  });

  readonly skills = signal<Skill[]>([
    { name: 'Angular', level: 'Advanced', category: 'Tech' },
    { name: 'Python', level: 'Intermediate', category: 'Tech' },
    { name: 'Cybersecurity', level: 'Intermediate', category: 'Tech' },
    { name: 'Financial Analysis', level: 'Intermediate', category: 'Finance' }
  ]);
}