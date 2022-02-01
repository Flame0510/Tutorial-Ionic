import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-token',
  templateUrl: './token.page.html',
  styleUrls: ['./token.page.scss'],
})
export class TokenPage {
  //@ViewChild('header') header: ElementRef;

  token: string;

  headerHeight: number | undefined;

  errorModalVisibility: boolean = false;

  constructor(
    private router: Router,
    private storage: Storage,
    private apiService: ApiService
  ) {}

  /* ngOnInit() {
    this.headerHeight = this.header.nativeElement.offsetHeight;
  } */

  check = async () =>
    this.apiService.call(this.token).subscribe(
      (response) => (
        this.storage.set('token', this.token), this.router.navigate(['home'])
      ),

      (err) => ((this.token = ''), (this.errorModalVisibility = true))
    );

  hideModal = () => (this.errorModalVisibility = false);
  
  setToken = () => this.token = "a8ff314d62996c1d478785b00fc42388";
}
