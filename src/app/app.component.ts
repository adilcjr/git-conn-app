import { Component } from '@angular/core';
import { GitConnectorService } from './services/git-connector.service';
import { Repo } from '../assets/repo';
import { RepositoryService } from './services/repository.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  repoGit: Repo[];
  repoData: Repo[];
  loading = false;
  language = '';
  error = '';

  constructor(
    private _service: GitConnectorService,
    private _api: RepositoryService) {}

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnInit(): void {
    this.loadRepos();
  }

  onSubmit(repoForm: any) {

    this.loading = true;
    this.error = '';
    this.repoGit = null;

    this._service.getBestRepositoriesByLanguage(repoForm.language)
      .subscribe(
        (response) => {
          this.repoGit = response.items;
        },
        (error) => {
          this.error = error.message;
          this.loading = false;
        },
        () => {
          this.loading = false;
        }
      );
  }

  loadRepos() {

    this._api.getRepositories().subscribe(
      (response) => {
        this.repoData = response;
      },
      (error) => {
        console.log(error.message);
      }
    );
  }

  saveRepo(newRepo: Repo) {

    this._api.create(newRepo).subscribe(
      (response) => {
        console.log(response);
        this.loadRepos();
      },
      (error) => {
        console.log(error.message);
      }
    );
  }

  deleteRepo(id: number) {
    this._api.delete(id).subscribe(
      (response) => {
        console.log(response);
        this.loadRepos();
      },
      (error) => {
        console.log(error.message);
      }
    );
  }
}
