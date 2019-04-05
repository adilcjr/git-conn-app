import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repo } from '../../assets/repo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  private _devUrl = 'http://localhost:8080/api/repositories/';
  private _prodUrl = 'https://git-conn-app.herokuapp.com/api/repositories/';
  private _url = '';

  constructor(private _http: HttpClient) {

    // Put true for production environment, false otherwise
    const forProduction = true;

    if (forProduction) {
      this._url = this._prodUrl;
    } else {
      this._url = this._devUrl;
    }
  }

  public getRepositories(): Observable<any> {

    return this._http.get<any>(this._url);
  }

  public getRepository(id: number): Observable<any> {
    return this._http.get(this._url + id);
  }

  public create(repo: Repo): Observable<any> {
    return this._http.post(this._url, repo);
  }

  public update(repo: Repo): Observable<any> {
    return this._http.put(this._url, repo);
  }

  public delete(id: number): Observable<any> {
    return this._http.delete(this._url + id);
  }
}
