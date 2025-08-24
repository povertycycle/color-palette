import { Component, inject } from '@angular/core';
import { Display } from '../../../constants/enum';
import { ContentService } from '../../../contents.service';
import { AngularRemixIconComponent } from 'angular-remix-icon';

@Component({
  selector: `display-switch`,
  template: `
    <button
      title="Column Display"
      (click)="changeDisplay(Display.Column)"
      [class.switch-active]="isActive(Display.Column)"
    >
      <rmx-icon name="layout-vertical-fill" />
    </button>
    <button
      title="Row Display"
      (click)="changeDisplay(Display.Row)"
      [class.switch-active]="isActive(Display.Row)"
    >
      <rmx-icon name="layout-horizontal-fill" />
    </button>
  `,
  styleUrl: './display-switch.scss',
  imports: [AngularRemixIconComponent],
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
