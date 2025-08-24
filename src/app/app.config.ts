import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { ContentService } from '../contents.service';
import {
  RiAddLine,
  RiCloseLine,
  RiDeleteBinLine,
  RiDragMove2Fill,
  RiFileCopy2Fill,
  RiFileCopyLine,
  RiImage2Line,
  RiLayoutHorizontalFill,
  RiLayoutVerticalFill,
  RiPaletteFill,
  provideRemixIcon,
} from 'angular-remix-icon';

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: ContentService },
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRemixIcon({
      RiImage2Line,
      RiCloseLine,
      RiPaletteFill,
      RiFileCopy2Fill,
      RiLayoutHorizontalFill,
      RiLayoutVerticalFill,
      RiAddLine,
      RiDeleteBinLine,
      RiFileCopyLine,
      RiDragMove2Fill,
    }),
  ],
};
