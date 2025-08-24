import { Component, inject } from '@angular/core';
import { AngularRemixIconComponent } from 'angular-remix-icon';
import { prominent } from 'color.js';
import { Toast } from '../../utils/toast/toast';
import { ContentService } from '../../../contents.service';

@Component({
  selector: 'upload-image',
  template: `<button (click)="inputFile.click()" class="output__button">
      <span>Upload Image</span><rmx-icon name="image-2-line"></rmx-icon>
    </button>
    <input
      (change)="processImage($event.target)"
      #inputFile
      type="file"
      accept="image/*"
    />
    @if (show) {
    <toast [text]="show" (closeToast)="closeToast()" />
    }`,
  imports: [Toast, AngularRemixIconComponent],
  styleUrl: './upload-image.scss',
})
export class UploadImage {
  show: string | null = null;
  contents = inject(ContentService);

  processImage(target: HTMLInputElement) {
    const file = target.files?.[0];
    if (file) {
      const localUrl = URL.createObjectURL(file);
      prominent(localUrl, { amount: 7, format: 'hex', group: 33 }).then(
        (colors) => {
          this.contents.replaceAllColors(
            (colors as string[]).map((color) => color.toUpperCase())
          );
          URL.revokeObjectURL(localUrl);
          target.value = '';
          this.show = 'Image processed';
        }
      );
    }
  }

  closeToast() {
    this.show = null;
  }
}
