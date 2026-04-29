import { ChangeDetectionStrategy, Component, computed, ElementRef, inject, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ProfileService } from './services/profile';

@Component({
  selector: 'app-who-am-i',
  imports: [],
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
  
  userProfile = this.profileService.profile;

  private readonly el = inject(ElementRef); // Inyectamos la referencia al componente
  
  private readonly frameIndex = signal(0);
  private readonly totalFrames = 302; //
  private animationInterval: any;
  private isGoingForward = true;
  private observer: IntersectionObserver | null = null;

  protected readonly currentFrameClass = computed(() => 
    `frame_${this.frameIndex().toString().padStart(4, '0')}`
  );

  ngOnInit() {
    this.setupIntersectionObserver();
  }

  private setupIntersectionObserver() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.startAnimation(); // Usuario entró a la sección
        } else {
          this.stopAnimation();  // Usuario salió de la sección
        }
      });
    }, { threshold: 0.1 }); // Se activa cuando al menos el 10% es visible

    this.observer.observe(this.el.nativeElement);
  }

  private startAnimation() {
    if (this.animationInterval) return;
    
    this.animationInterval = setInterval(() => {
      this.frameIndex.update(current => {
        if (this.isGoingForward) {
          if (current < this.totalFrames - 1) return current + 1;
          this.isGoingForward = false;
          return current - 1;
        } else {
          if (current > 0) return current - 1;
          this.isGoingForward = true;
          return current + 1;
        }
      });
    }, 45);
  }

  private stopAnimation() {
    if (this.animationInterval) {
      clearInterval(this.animationInterval);
      this.animationInterval = null;
    }
  }

  ngOnDestroy() {
    this.stopAnimation();
    this.observer?.disconnect();
  }
}