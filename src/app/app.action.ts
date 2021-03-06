import { Action } from "@ngrx/store";
import * as dataFormat from "../app/data-format";
import { LoadChildren } from '@angular/router';
export const LOAD = "LOAD";
export const LOAD_SUCCESS = "LOAD_SUCCESS";
export const LOAD_FAIL = "LOAD_FAIL";


export class load implements Action {
    readonly type = LOAD;
}
export class loadSuccess implements Action {
    readonly type = LOAD_SUCCESS;
    constructor(public payload: dataFormat.Post[]) { };
}
export class loadFail implements Action {
    readonly type = LOAD_FAIL;

}


export type allType = load | loadFail | loadSuccess ;