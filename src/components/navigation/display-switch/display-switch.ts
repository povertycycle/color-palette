import { Component, inject } from '@angular/core';
import { Display } from '../../../constants/enum';
import { ContentService } from '../../../contents.service';

@Component({
  selector: `display-switch`,
  template: `
    <button
      title="Column Display"
      (click)="changeDisplay(Display.Column)"
      [class.switch-active]="isActive(Display.Column)"
    >
      <i class="ri-layout-vertical-fill"></i>
    </button>
    <button
      title="Row Display"
      (click)="changeDisplay(Display.Row)"
      [class.switch-active]="isActive(Display.Row)"
    >
      <i class="ri-layout-horizontal-fill"></i>
    </button>
  `,
  styleUrl: './display-switch.scss',
})
export class DisplaySwitch {
  Display = Display;
  private display = inject(ContentService);

  isActive(current: Display) {
    return this.display.getDisplay() === current;
  }

  changeDisplay(newDisplay: Display) {
    this.display.setDisplay(newDisplay);
  }
}
