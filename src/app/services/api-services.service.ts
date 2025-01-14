import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  constructor(private http: HttpClient) { }

  url = 'https://pokeapi.co/api/v2/pokemon';  
  
  api(): Observable<any> {
    return this.http.get(this.url);  
  }
}
