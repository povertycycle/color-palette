import { Component, inject } from '@angular/core';
import { MainContents } from '../components/contents/main-contents/main-contents';
import { MainHeader } from '../components/navigation/main-header/main-header';
import { Display } from '../constants/enum';
import { ContentService } from '../contents.service';

@Component({
  selector: 'app-root',
  template: `<div class="page-container">
    <main-header />
    <main-contents
      [attr.data-display]="isRowDisplay()"
      [style.flex-direction]="isRowDisplay() ? 'column' : 'row'"
    />
  </div> `,
  imports: [MainHeader, MainContents],
  styleUrl: './app.scss',
})
export class App {
  Display = Display;
  private display = inject(ContentService);

  isRowDisplay() {
    return this.display.getDisplay() === Display.Row;
  }
}
