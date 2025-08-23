import { Component } from '@angular/core';
import { CopyOutput } from '../copy-output/copy-output';
import { DisplaySwitch } from '../display-switch/display-switch';
import { DownloadPNG } from '../download-png/download-png';
import { UploadImage } from '../upload-image/upload-image';

@Component({
  selector: 'main-header',
  template: `<upload-image /><download-png /><copy-output /><display-switch />`,
  imports: [UploadImage, DownloadPNG, DisplaySwitch, CopyOutput],
  styleUrl: './main-header.scss',
})
export class MainHeader {}
