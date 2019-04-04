import { Component } from '@angular/core';
import { GitConnectorService } from './services/git-connector.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  login = '';
  repository = '';
  repoData: any;

  constructor(private _service: GitConnectorService) {}

  onSubmit(repoForm: any) {

    console.log('Data: ' + repoForm.login + ', ' + repoForm.repository);

    this._service.getRepository(repoForm.login, repoForm.repository).subscribe( res => {
      this.repoData = res;
    });

    console.log('Data: ' + this.repoData);
  }
}
