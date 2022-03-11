import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {


  @Input()
  titulo: string = ''

  @Input()
  sub: string = ''

  @Input()
  storage: string = ''

  @Input()
  user: string = ''

  @Input()
  up: string = ''

  @Input()
  bg: string = ''

  @Input()
  tam: string = ''

  @Input()
  font: string = ''

  constructor( private snackBar: MatSnackBar) {}

  openSnackBar(message:any, Action:any){


    this.snackBar.open(message, Action);

  }
} 