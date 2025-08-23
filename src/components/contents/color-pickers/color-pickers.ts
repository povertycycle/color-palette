import {
  Component,
  HostBinding,
  inject,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { isDark } from '../../../utils/colors';
import { ContentService } from '../../../contents.service';
import { Display } from '../../../constants/enum';

@Component({
  selector: 'color-pickers',
  template: `<div [style.background-color]="color" [attr.data-is-dark]="isDark">
    <button
      (click)="this.display.removeColor(color, idx)"
      class="button__delete"
    >
      <i class="ri-delete-bin-line"></i>
    </button>
    <div class="picker__editor" (click)="colorSelect.click()">
      {{ color.replace('#', '').toUpperCase() }}
      <input
        [value]="color"
        type="color"
        (input)="handleColorChange($event.target.value)"
        width="0"
        height="0"
        #colorSelect
      />
    </div>
  </div>`,
  styleUrl: './color-pickers.scss',
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

  handleColorChange(value: string) {
    this.display.updateColor(value, this.idx);
  }
}
