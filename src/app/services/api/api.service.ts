import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  call = (api: string) =>
    this.http.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=${api}`
    );
}
