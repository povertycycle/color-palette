import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'popup',
  template: ` <div class="popup__blocker" (click)="close()"></div>
    <div class="popup__container">
      <div class="popup__header">
        <span>{{ title }}</span
        ><i (click)="close()" class="toast__icon-close ri-close-line"></i>
      </div>
      <ng-content />
    </div>`,
  styleUrl: './popup.scss',
})
export class Popup {
  @Input() title!: string | null;
  @Output() closePopup = new EventEmitter<boolean>();

  close() {
    this.closePopup.emit(false);
  }
}
