import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitConnectorService {

  _defaultUrl =  'https://api.github.com';

  constructor(private _http: HttpClient) { }

  public findRepositoryByName(login: string, repository: string): any {
    return this._http.get<any>(this._defaultUrl + 'repos/' + login + '/' + repository);
  }

  public getBestRepositoriesByLanguage(language: string): Observable<any> {

    const params = new HttpParams()
      .append('q', 'language:' + language)
      .append('sort', 'stars')
      .append('order', 'desc')
      .append('per_page', '5');

    return this._http.get<any>(this._defaultUrl + '/search/repositories', {params});
  }

}
