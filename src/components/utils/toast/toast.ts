import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularRemixIconComponent } from 'angular-remix-icon';

@Component({
  selector: 'toast',
  template: `<span>{{ text }}</span>
    <rmx-icon
      (click)="close()"
      class="toast__icon-close"
      name="close-line"
    ></rmx-icon>`,
  styleUrl: './toast.scss',
  imports: [AngularRemixIconComponent],
})
export class Toast implements OnInit {
  @Input() text!: string | null;
  @Output() closeToast = new EventEmitter<string | null>();
  _timeout: number | undefined;

  close() {
    this.closeToast.emit(null);
    window.clearTimeout(this._timeout);
  }

  ngOnInit(): void {
    this._timeout = window.setTimeout(() => {
      this.close();
    }, 5000);
  }
}
