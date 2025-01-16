import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from './services/api-services.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-logic';
  latest: any;
  isOpen: boolean = false;

  
  constructor (private apiservice: ApiServicesService) {
    this.apiservice.fetch().subscribe((data) => {
      this.latest = data;
      console.log(this.latest)
    })
  }
  toggleOpen(): void {
    this.isOpen = !this.isOpen;
  }
}
