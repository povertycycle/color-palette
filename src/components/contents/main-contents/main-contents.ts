import { Component, inject } from '@angular/core';
import { AngularRemixIconComponent } from 'angular-remix-icon';
import { Display } from '../../../constants/enum';
import { ContentService } from '../../../contents.service';
import { blendColors } from '../../../utils/colors';
import { ColorPickers } from '../color-pickers/color-pickers';
import { CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'main-contents',
  template: `@for (color of this.colors.getColors(); track color; let idx =
    $index) { @if (idx !== 0 && this.colors.getColors().length < 10) {
    <div (click)="addNewColor(idx)" class="list__container">
      <div class="container__hover">
        <button class="container__button">
          <rmx-icon name="add-line" />
        </button>
      </div>
    </div>
    }
    <color-pickers
      [color]="color"
      [idx]="idx"
      cdkDrag
      [cdkDragLockAxis]="this.colors.getDisplay() !== Display.Row ? 'x' : 'y'"
      cdkDragBoundary="main-contents"
    />
    }`,
  imports: [ColorPickers, AngularRemixIconComponent, CdkDrag],
  styleUrl: './main-contents.scss',
})
export class MainContents {
  colors = inject(ContentService);
  Display = Display;

  addNewColor(index: number) {
    const list = this.colors.getColors();
    const randColor = blendColors(list[index - 1], list[index]);
    this.colors.addColor(randColor, index);
  }
}
