import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.page.html',
  styleUrls: ['./slider.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SliderPage {
  constructor(private storage: Storage, private router: Router) { }


  async tutorialIsShowed() {
    await this.storage.set('hasShowedTutorial', true);
    this.router.navigate(['/home']);
  }
}