import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {Person} from '../person.model';
import {HttpService} from '../http.service';
import {MatSnackBar} from '@angular/material';
@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {
  toPost = [
    new Person('Martijn', 21),
    new Person('Ryan', 21),
    new Person('Jan Willem', 22),
    new Person('Ole', 20)
  ];

  posted: Person[] = [

  ];

  modusInteractive = 'determinate';
  constructor(private http: HttpService, private snackBar: MatSnackBar) {}
  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<Person[]>, post = false) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else if (post) {
      this.http.post('/createPerson', event.item.data).subscribe(
        info => {
          if (info.ok) {
            const person = info.body as Person;
            this.snackBar.open('Object opgeslagen: id:' + person.id, 'Nice :)', {
              duration: 2000,
            });
          }
        },
        error => alert('fout bij getten')
      );
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }



}
