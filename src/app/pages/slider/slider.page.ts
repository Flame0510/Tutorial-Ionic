import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.page.html',
  styleUrls: ['./slider.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SliderPage {
  constructor(
    private storage: Storage,
    private router: Router,
    private apiService: ApiService
  ) {}

  async tutorialIsShowed() {
    await this.storage.set('hasShowedTutorial', true);
    /* this.router.navigate([
      this.apiService.call(await this.storage.get('token')).subscribe(
        (response) => 'home',
        (err) => 'token'
      ),
    ]); */
  }
}
