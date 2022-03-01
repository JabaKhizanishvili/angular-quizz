import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  constructor() { }
  @Input() color!: string;
  @Output() btnClick = new EventEmitter();

  jaba() {
    this.btnClick.emit();
  }
  ngOnInit(): void {
    // console.log(data[0].answer[0].option)
  }

}
