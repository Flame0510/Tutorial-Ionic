import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { ApiService } from './services/api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private storage: Storage,
    private router: Router,
    private apiService: ApiService
  ) {}

  async ngOnInit() {
    await this.storage.create();

    const token = await this.storage.get('token');

    //await this.storage.set('token', 'sba');

    (await this.storage.get('hasShowedTutorial'))
      ? this.apiService.call(token).subscribe(
          (response) => this.router.navigate(['home']),

          (err) => this.router.navigate(['token'])
        )
      : this.router.navigate(['slider']);
  }
}
