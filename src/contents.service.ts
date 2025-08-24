import { Injectable, Output } from '@angular/core';
import { Display } from './constants/enum';
import { BehaviorSubject } from 'rxjs';
import { getRandomColor } from './utils/colors';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private display: Display = Display.Column;
  private colors: string[] = [getRandomColor(), getRandomColor()];

  getDisplay() {
    return this.display;
  }

  setDisplay(newDisplay: Display) {
    this.display = newDisplay;
  }

  getColors() {
    return this.colors;
  }

  reArrange(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.colors, event.previousIndex, event.currentIndex);
  }

  addColor(color: string, index: number) {
    if (this.colors.length < 10) {
      this.colors.splice(index, 0, color);
    }
  }

  updateColor(color: string, index: number) {
    this.colors[index] = color;
  }

  removeColor(color: string, index: number) {
    this.colors = this.colors.filter((c, idx) => c !== color && idx !== index);
  }

  replaceAllColors(colors: string[]) {
    this.colors = colors;
  }
}
