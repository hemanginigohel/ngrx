import { Injectable } from '@angular/core';
import {  HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpclient:HttpClient) {}
  getData():Observable<any>{
    return this.httpclient.get("https://jsonplaceholder.typicode.com/posts");
  }
}


