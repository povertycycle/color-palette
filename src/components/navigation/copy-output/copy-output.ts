import { Component, inject } from '@angular/core';
import { ContentService } from '../../../contents.service';
import { copy } from '../../../utils/dom';
import { Toast } from '../../utils/toast/toast';

@Component({
  selector: 'copy-output',
  template: `<button (click)="copyText()" class="output__button">
      <span>Copy Colors</span><i class="ri-file-copy-2-fill"></i>
    </button>
    @if (show) {
    <toast [text]="show" (closeToast)="closeToast()" />
    }`,
  imports: [Toast],
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
