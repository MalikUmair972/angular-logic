import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {
  url = 'https://api.spacexdata.com/v5/launches/latest';

  constructor(private http: HttpClient) {
    this.fetch();
  }
  fetch() {
    return this.http.get(this.url)
  }
}

