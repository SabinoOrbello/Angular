import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Import per il client HTTP
import { RouterModule } from '@angular/router'; // Se usi routing

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, RouterModule], // Import di HttpClientModule per le chiamate API
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-app';
}
