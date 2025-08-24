import { Component } from '@angular/core';
import { AngularRemixIconComponent } from 'angular-remix-icon';
import { Popup } from '../../utils/popup/popup';
import { DownloadForm } from './download-form';

@Component({
  selector: 'download-png',
  template: `<button (click)="openPopup()" class="output__button">
      <span>Download PNG</span><rmx-icon name="palette-fill"> </rmx-icon>
    </button>
    @if (show) {
    <popup [title]="'Download as PNG'" (closePopup)="closePopup()">
      <download-form (closePopup)="closePopup()" />
    </popup>
    } `,
  imports: [DownloadForm, Popup, AngularRemixIconComponent],
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
