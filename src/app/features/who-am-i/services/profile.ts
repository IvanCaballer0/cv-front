import { Injectable, signal } from '@angular/core';
import { ProfileData } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profileState = signal<ProfileData>({
    fullName: 'Ivan F. Caballero',
    professionalTitle: 'Estudiante de Ingeniería de Sistemas y Computación',
    biography: 'Estudiante de la Universidad de los Andes enfocado en el \
    desarrollo de interfaces modernas con Angular 21 y la integración nativa \
    de IA mediante Model Context Protocol (MCP). Apasionado por la \
    ciberseguridad y la automatización.',
    avatarUrl: '/favicon.ico',
    location: 'Bogotá, Colombia'
  });

  profile = this.profileState.asReadonly();
}