import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitConnectorService {

  _url =  'https://api.github.com/repos/';
  parsed = '';

  constructor(private _http: HttpClient) { }

  public getRepository(login: string, repository: string): any {
    return this._http.get<any>(this._url + login + '/' + repository);
  }
}
