import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import html2canvas from 'html2canvas';
import { AngularRemixIconComponent } from 'angular-remix-icon';

@Component({
  selector: 'download-form',
  template: `<div class="popup__input-name">
      <span>Filename</span>
      <input [(ngModel)]="fileName" placeholder="myPalette" />
    </div>
    <div class="popup__input">
      <span>Dimensions</span>
      <input [(ngModel)]="width" type="number" placeholder="960" />
      <rmx-icon name="close-line" />
      <input [(ngModel)]="height" type="number" placeholder="480" />
    </div>
    <button class="popup__button" (click)="saveAsPng()">Download</button>`,
  imports: [FormsModule, AngularRemixIconComponent],
  styleUrl: './download-form.scss',
})
export class DownloadForm {
  fileName: string | undefined;
  width: number | undefined;
  height: number | undefined;

  @Output() closePopup = new EventEmitter<boolean>();

  close() {
    this.closePopup.emit(false);
  }

  updateTitle(newTitle: string) {
    this.fileName = newTitle;
  }

  saveAsPng() {
    const target = document.getElementById('main-contents-container');
    if (target) {
      html2canvas(target).then((canvas) => {
        const extraCanvas = document.createElement('canvas');
        const targetWidth = this.width ?? 960;
        const targetHeight = this.height ?? 480;
        extraCanvas.setAttribute('width', String(targetWidth));
        extraCanvas.setAttribute('height', String(targetHeight));
        const ctx = extraCanvas.getContext('2d');
        ctx?.drawImage(
          canvas,
          0,
          0,
          canvas.width,
          canvas.height,
          0,
          0,
          targetWidth,
          targetHeight
        );
        const myPalette = extraCanvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = (this.fileName ?? 'myPalette') + '.png';
        link.target = '_self';
        link.href = myPalette;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        this.close();
      });
    }
  }
}
