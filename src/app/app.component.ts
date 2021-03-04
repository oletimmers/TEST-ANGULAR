import { Component } from '@angular/core';
import {DarkmodeService} from './darkmode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TEST-ANGULAR';
  darkmode: boolean;
  constructor(private darkmodeService: DarkmodeService) {
    this.darkmode = darkmodeService.darkmode;
  }
  switchDarkMode() {
    return this.darkmodeService.switchDarkMode();
  }
}
