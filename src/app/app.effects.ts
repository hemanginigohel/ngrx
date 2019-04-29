import { Effect, ofType } from "@ngrx/effects";
import { Actions } from "@ngrx/effects";
import { AppService } from "../app/app.service";
import { Injectable } from '@angular/core';
import { Action } from "@ngrx/store";
import { Observable, of } from 'rxjs';
import * as userAction from "../app/app.action";
import { mergeMap, map, catchError } from "rxjs/operators";
import * as dataformat from "../app/data-format";
@Injectable()
export class AppEffect {
  constructor(private service: AppService, private action$: Actions) { }

  @Effect()
  loadData$: Observable<Action> = this.action$.pipe(
    ofType<userAction.load>(userAction.LOAD),
    mergeMap((action: userAction.load) =>
      this.service.getData().pipe(
        map(
          (post: dataformat.Post[]) => {
            return new userAction.loadSuccess(post)
          }
        ),
        catchError(err => of(new userAction.loadFail())
        ))
    )
  )
}