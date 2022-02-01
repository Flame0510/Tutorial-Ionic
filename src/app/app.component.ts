import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(private storage: Storage, private router: Router) {}


  async ngOnInit() {
    // await this.storage.create();
    // const sliderHasShowed: true | null = await this.storage.get('slider'); // true null
    // const path = sliderHasShowed ? '/home' : '/slider';
    // await this.router.navigate([path]);

    await this.storage.create();
    await this.router.navigate([await this.storage.get('hasShowedTutorial') ? 'token' : 'slider']);
  }
}
