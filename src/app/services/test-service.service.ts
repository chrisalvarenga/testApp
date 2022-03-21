import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Canal } from '../canal/home/models/canal';
@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  constructor(private httpClient: HttpClient,) { }

  public send(canal: Canal): Observable<any> {
    return this.httpClient.post<any>(`http://747a-190-5-111-244.ngrok.io/api/test`, canal);
  }
}
