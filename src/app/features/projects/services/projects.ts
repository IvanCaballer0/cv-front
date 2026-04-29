import { Injectable, signal } from '@angular/core';
import { Project } from '../models/project';

@Injectable()
export class Projects {
  projectsState = signal<Project[]>([
    {
      id: '1',
      title: 'Arquitectura de CV en Angular 21',
      description: 'Desarrollo de portafolio profesional utilizando control \
      de flujo nativo de Angular, Signals y flujos asistidos por IA.',
      technologies: ['Angular 21', 'TypeScript', 'Signals', 'IA'],
      imageUrl: 'assets/projects/angular-cv.webp'
    },
    {
      id: '2',
      title: 'Auditoría Técnica & Pentesting',
      description: 'Documentación de +10 laboratorios en Hack The Box (HTB) y creación de scripts en Python/Bash para reconocimiento automatizado.',
      technologies: ['Kali Linux', 'Python', 'Bash', 'HTB'],
      imageUrl: 'assets/projects/cybersec.webp'
    },
    {
      id: '3',
      title: 'Integración MCP & Agentes de IA',
      description: 'Investigación y aplicación del Model Context Protocol para automatizar tareas de codificación y análisis de datos locales.',
      technologies: ['MCP', 'Gemini', 'OpenClaw', 'Python'],
      imageUrl: 'assets/projects/ai-mcp.webp'
    }
  ]);

  projects = this.projectsState.asReadonly();
}