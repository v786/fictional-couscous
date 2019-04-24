import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Rss2jsonService {

  constructor(private _http: HttpClient) { }

  fetchURL(url): Observable<any> {
    return this._http.get('https://api.rss2json.com/v1/api.json?rss_url=' + url);
  }
}
