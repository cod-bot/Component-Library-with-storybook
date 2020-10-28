import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-button',
  template: `
    <button [disabled]="disabled">{{text}}</button>
  `
})
export class ButtonComponent {
  @Input() text: string;
  @Input() disabled: boolean;
  @Input()
  user: unknown = null;

  @Output()
  onLogin = new EventEmitter<Event>();

  @Output()
  onLogout = new EventEmitter<Event>();

  @Output()
  onCreateAccount = new EventEmitter<Event>();
}