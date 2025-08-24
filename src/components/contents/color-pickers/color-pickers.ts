import { Component, HostBinding, inject, Input } from '@angular/core';
import { Display } from '../../../constants/enum';
import { ContentService } from '../../../contents.service';
import { isDark } from '../../../utils/colors';
import { AngularRemixIconComponent } from 'angular-remix-icon';
import { copy } from '../../../utils/dom';
import { CdkDragHandle, CdkDragPlaceholder } from '@angular/cdk/drag-drop';

@Component({
  selector: 'color-pickers',
  template: `<div
    [style.background-color]="_color"
    [attr.data-is-row]="isRow"
    [attr.data-is-dark]="isDark"
  >
    <button class="button" cdkDragHandle>
      <rmx-icon name="drag-move-2-fill" />
    </button>
    <button (click)="copyText()" class="button">
      <rmx-icon name="file-copy-line" />
    </button>
    <button
      [disabled]="this.display.getColors().length <= 2"
      (click)="this.display.removeColor(color, idx)"
      class="button"
    >
      <rmx-icon name="delete-bin-line" />
    </button>
    <div class="picker__editor" (click)="colorSelect.click()">
      {{ color.toUpperCase() }}
      <input
        [value]="color"
        type="color"
        (input)="handleColorInput($event.target.value)"
        (change)="handleColorChange($event.target.value)"
        width="0"
        height="0"
        #colorSelect
      />
    </div>
  </div>`,
  styleUrl: './color-pickers.scss',
  imports: [AngularRemixIconComponent, CdkDragHandle],
})
export class ColorPickers {
  display = inject(ContentService);
  @HostBinding('attr.data-row')
  get isRow(): boolean {
    return this.display.getDisplay() === Display.Row;
  }
  @Input() idx!: number;
  _color: string = this.display.getColors().at(this.idx) ?? '';
  get color() {
    return this._color;
  }
  @Input() set color(color: string) {
    this._color = color;
  }
  get isDark() {
    return isDark(this.color);
  }

  handleColorInput(value: string) {
    this._color = value;
  }

  handleColorChange(value: string) {
    this.display.updateColor(value.toUpperCase(), this.idx);
  }

  copyText() {
    copy(this.color);
  }
}
