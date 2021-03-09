import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { ThirdComponentComponent } from './third-component/third-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatProgressBarModule,
  MatRadioModule,
  MatSlideToggleModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {DarkmodeService} from './darkmode.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    ThirdComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatProgressBarModule,
    MatRadioModule,
    FormsModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [DarkmodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
