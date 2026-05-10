import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Footer {
  uptime = signal('00:00:00');
  currentYear = new Date().getFullYear();

  ngOnInit() {
    const startTime = Date.now();
    setInterval(() => {
      const seconds = Math.floor((Date.now() - startTime) / 1000);
      const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
      const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
      const s = (seconds % 60).toString().padStart(2, '0');
      this.uptime.set(`${h}:${m}:${s}`);
    }, 1000);
  }
}
