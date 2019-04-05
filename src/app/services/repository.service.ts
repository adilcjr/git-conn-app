import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repo } from '../../assets/repo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  _defaultUrl = 'http://localhost:8080/api/repositories/';

  constructor(private _http: HttpClient) { }

  public getRepositories(): Observable<any> {

    return this._http.get<any>(this._defaultUrl);
  }

  public getRepository(id: number): any {
    return this._http.get(this._defaultUrl + id);
  }

  public create(repo: Repo): any {
    return this._http.post(this._defaultUrl, repo);
  }

  public update(repo: Repo): any {
    return this._http.put(this._defaultUrl, repo);
  }

  public delete(id: number): any {
    return this._http.delete(this._defaultUrl + id);
  }
}
