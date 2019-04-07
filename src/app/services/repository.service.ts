import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repo } from '../../assets/repo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  private _url = 'https://git-conn-api.herokuapp.com/api/repositories/';

  constructor(private _http: HttpClient) { }

  public getRepositories(): Observable<any> {

    return this._http.get<any>(this._url);
  }

  public getRepository(id: number): Observable<any> {
    return this._http.get(this._url + id);
  }

  public create(repo: Repo): Observable<any> {

    repo.id = null;
    return this._http.post(this._url, repo);
  }

  public delete(id: number): Observable<any> {
    return this._http.delete(this._url + id);
  }
}
