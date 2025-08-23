import { Component, inject } from '@angular/core';
import { ContentService } from '../../../contents.service';
import { ColorPickers } from '../color-pickers/color-pickers';
import { blendColors, getRandomColor } from '../../../utils/colors';
import { Display } from '../../../constants/enum';

@Component({
  selector: 'main-contents',
  template: `@for (color of colorList; track idx; let idx = $index) { @if (idx
    !== 0 && colorList.length < 10) {
    <div (click)="addNewColor(idx)" class="list__container">
      <div class="container__hover">
        <button class="container__button">
          <i class="ri-add-line"></i>
        </button>
      </div>
    </div>
    }
    <color-pickers [color]="color" [idx]="idx" />
    }`,
  imports: [ColorPickers],
  styleUrl: './main-contents.scss',
})
export class MainContents {
  colors = inject(ContentService);
  isRow = this.colors.getDisplay() === Display.Row;
  colorList = this.colors.getColors();

  addNewColor(index: number) {
    const list = this.colors.getColors();
    const randColor = blendColors(list[index - 1], list[index]);
    this.colors.addColor(randColor, index);
  }
}
