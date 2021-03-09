import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.scss']
})
export class SecondComponentComponent implements OnInit {
  public tokenToJoin: string;
  public contentReturned: string;
  constructor(private http: HttpService) { }

  ngOnInit() {
  }

  joinGame() {
    alert('Join game with token: ' + this.tokenToJoin);
    this.http.get<object>('/person').subscribe(
      info => {
        const obj = info.body as Array<object>;
        this.contentReturned = obj[1].toString();
      },
      error => alert('fout bij getten')
    );
  }
}
