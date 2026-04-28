import { Injectable, signal } from '@angular/core';
import { ProfileData } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profileState = signal<ProfileData>({
    fullName: 'Iván F. Caballero',
    professionalTitle: 'Estudiante de Ingeniería de Sistemas y Computación',
    biography: 'Soy estudiante de la Universidad de los Andes...',
    avatarUrl: '/favicon.ico',
    location: 'Bogotá, Colombia'
  });

  profile = this.profileState.asReadonly();
}