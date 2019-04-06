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
    this.showSavedRepos();
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

  showSavedRepos() {

    this._api.getRepositories().subscribe(
      (response) => {
        this.repoData = response;
      },
      (error) => {
        console.log(error.message);
      });
  }
}
