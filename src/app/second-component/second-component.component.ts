import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.scss']
})
export class SecondComponentComponent implements OnInit {
  public tokenToJoin: string;
  constructor() { }

  ngOnInit() {
  }

  joinGame() {
    alert('Join game with token: ' + this.tokenToJoin);
  }
}
