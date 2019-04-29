import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as Actions from './app.action'
import * as Selectors from './app.selector'
import { Post } from './data-format';
import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Hemangini-ngrx';
  data: Post[];
  displayTable: boolean = false;

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }
  getAllData() {
    this.displayTable = true;
    this.store.dispatch(new Actions.load())
    this.store.select(Selectors.getAllUserData)
      .subscribe((response) => {
        this.data = response;
      })
  }
  getSpecialUser() {
    this.displayTable = true;
    this.store.select(Selectors.getSpecialUserData)
      .subscribe((response) => {
        this.data = response;
      })
  }
}

