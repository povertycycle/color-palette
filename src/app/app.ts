import { CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';
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
      cdkDropList
      [cdkDropListOrientation]="
        !this.isRowDisplay() ? 'horizontal' : 'vertical'
      "
      (cdkDropListDropped)="drop($event)"
      id="main-contents-container"
      [attr.data-display]="isRowDisplay()"
      [style.flex-direction]="isRowDisplay() ? 'column' : 'row'"
    />
  </div> `,
  imports: [CdkDropList, MainHeader, MainContents],
  styleUrl: './app.scss',
})
export class App {
  Display = Display;
  private display = inject(ContentService);

  isRowDisplay() {
    return this.display.getDisplay() === Display.Row;
  }

  drop(event: CdkDragDrop<string[]>) {
    this.display.reArrange(event);
  }
}
