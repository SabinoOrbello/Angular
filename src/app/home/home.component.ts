import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private router: Router) {}

  logout() {
    // Rimuove eventuali dati di autenticazione (token, ecc.)
    localStorage.removeItem('token');
    // Reindirizza alla pagina di login
    this.router.navigate(['/login']);
  }
}
