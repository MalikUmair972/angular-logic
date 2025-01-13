import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  constructor(private http: HttpClient) { }

  // API URL to fetch multiple Pokémon
  url = 'https://pokeapi.co/api/v2/pokemon';  // Fetching first 10 Pokémon
  
  api(): Observable<any> {
    return this.http.get(this.url);  // API call
  }
}
