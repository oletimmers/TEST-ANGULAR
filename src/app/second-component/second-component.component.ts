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
    this.http.get<any>('/person').subscribe(
      info => {
        const arraytje = info.body as Array<any>;
        this.contentReturned = arraytje[arraytje.length - 1].name;
      },
      error => alert('fout bij getten')
    );
  }
}
