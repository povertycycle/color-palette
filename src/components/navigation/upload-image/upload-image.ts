import { Component } from '@angular/core';
import { Toast } from '../../utils/toast/toast';

@Component({
  selector: 'upload-image',
  template: `<button (click)="copyText()" class="output__button">
      <span>Upload Image</span><i class="ri-image-2-line"></i>
    </button>
    @if (show) {
    <toast [text]="show" (closeToast)="closeToast()" />
    }`,
  imports: [Toast],
  styleUrl: './upload-image.scss',
})
export class UploadImage {
  show: string | null = null;

  copyText() {}

  closeToast() {
    this.show = null;
  }
}
