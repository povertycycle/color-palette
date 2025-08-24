import { Component, inject } from '@angular/core';
import { ContentService } from '../../../contents.service';
import { copy } from '../../../utils/dom';
import { Toast } from '../../utils/toast/toast';
import { AngularRemixIconComponent } from 'angular-remix-icon';

@Component({
  selector: 'copy-output',
  template: `<button (click)="copyText()" class="output__button">
      <span>Copy Colors</span><rmx-icon name="file-copy-2-fill" />
    </button>
    @if (show) {
    <toast [text]="show" (closeToast)="closeToast()" />
    }`,
  imports: [Toast, AngularRemixIconComponent],
  styleUrl: './copy-output.scss',
})
export class CopyOutput {
  contents = inject(ContentService);
  show: string | null = null;

  copyText() {
    const text = this.contents.getColors().join(', ');
    copy(text);
    this.show = 'Colors copied to clipboard';
  }

  closeToast() {
    this.show = null;
  }
}
