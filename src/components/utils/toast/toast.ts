import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'toast',
  template: `<span>{{ text }}</span
    ><i (click)="close()" class="toast__icon-close ri-close-line"></i>`,
  styleUrl: './toast.scss',
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
