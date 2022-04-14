import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string = 'Add';
  @Input() color: string = 'green';
  @Output() btnClick = new EventEmitter()

  constructor() {}
  onClick() {
    this.btnClick.emit('')
  }
  ngOnInit(): void {}
}
