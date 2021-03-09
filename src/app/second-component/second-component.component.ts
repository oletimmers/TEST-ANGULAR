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
    this.http.get<any>('/person').subscribe(
      info => {
        this.contentReturned = info.body.content;
      },
      error => alert('fout bij getten')
    );
  }
}
