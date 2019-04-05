import { Component } from '@angular/core';
import { GitConnectorService } from './services/git-connector.service';
import { Repo } from '../assets/repo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  repoData: Repo[];
  loading = false;
  error = '';

  constructor(private _service: GitConnectorService) {}

  onSubmit(repoForm: any) {

    this.loading = true;
    this.error = '';
    this.repoData = null;

    this._service.getBestRepositoriesByLanguage(repoForm.language)
      .subscribe(
        (response) => {
          this.repoData = response.items;
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
}
