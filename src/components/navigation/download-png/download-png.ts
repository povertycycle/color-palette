import { Component } from '@angular/core';
import { Toast } from '../../utils/toast/toast';
import { Popup } from '../../utils/popup/popup';
import { DownloadForm } from './download-form';

@Component({
  selector: 'download-png',
  template: `<button (click)="openPopup()" class="output__button">
      <span>Download PNG</span><i class="ri-palette-fill"></i>
    </button>
    @if (show) {
    <popup [title]="'Download as PNG'" (closePopup)="closePopup()">
      <download-form />
    </popup>
    } `,
  imports: [DownloadForm, Popup],
  styleUrl: './download-png.scss',
})
export class DownloadPNG {
  show: boolean = false;

  openPopup() {
    this.show = true;
  }

  closePopup() {
    this.show = false;
  }
}

function downloadAsPNG() {}
// <toast [text]="show" (closeToast)="closeToast()" />
