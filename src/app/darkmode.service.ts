import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkmodeService {
  darkmode: boolean;

  constructor() {
    const fromStorage = localStorage.getItem('darkmode');
    if (fromStorage === 'true') {
      this.darkmode = true;
    } else {
      this.darkmode = false;
    }
  }
  switchDarkMode() {
    this.darkmode = !this.darkmode;
    localStorage.setItem('darkmode', String(this.darkmode));
    return this.darkmode;
  }
}
