import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Canal } from '../canal/home/models/canal';
@Injectable({
  providedIn: 'root'
})

export class TestServiceService {

  url = 'https://f27c-144-202-100-18.ngrok.io/smartbot/api/test';
  
  constructor(private httpClient: HttpClient,) { }

  public send(canal: Canal): Observable<any> {
    return this.httpClient.post<any>(`${this.url}`, canal);
  }
}
