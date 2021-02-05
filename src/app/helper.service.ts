import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private httpClient :  HttpClient) { }

  getdata():Observable<any>{
    return this.httpClient.request('GET', "/assets/cookies.json", {responseType:'json'});

  }
}
