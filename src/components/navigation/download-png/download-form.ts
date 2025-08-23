import { Component } from '@angular/core';
import { Toast } from '../../utils/toast/toast';
import { Popup } from '../../utils/popup/popup';

@Component({
  selector: 'download-form',
  template: `<div class="popup__input-name">
      <span>Filename</span>
      <input type="text" placeholder="myfile" />
    </div>
    <div class="popup__input">
      <span>Dimensions</span>
      <input type="number" placeholder="360" />
      <i class="ri-close-line"></i>
      <input type="number" placeholder="480" />
    </div>
    <button [disabled]="isDisabled" class="popup__button">Download</button>`,
  styleUrl: './download-form.scss',
})
export class DownloadForm {
  fileName: string = '';
  width: number = 0;
  height: number = 0;
  isDisabled = !this.fileName || !this.width || !this.height;
}

function downloadAsPNG() {}
// <toast [text]="show" (closeToast)="closeToast()" />
