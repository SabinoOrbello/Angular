// login.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true, // Indica che il componente è standalone
  imports: [FormsModule], // Aggiungi FormsModule qui
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    const url =
      'https://talento360-backend-637-staging.mashfrogcloud.com/token';
    const body = {
      client_id: '381aced7d112cceb18524406d02f240e',
      client_secret:
        '7fe98ab4443912c701c839b1826399f9c19f0fc4c82a9387517319a3e9684d6017d8b72d80fe47d8ba70a71fc5511a85b47036937549730c718cb35d659caee8',
      grant_type: 'password',
      username: this.email,
      password: this.password,
    };

    this.http.post<any>(url, body).subscribe(
      (response) => {
        if (response.access_token) {
          // Salva il token in localStorage o dove preferisci
          localStorage.setItem('access_token', response.access_token);
          // Reindirizza alla pagina protetta
          this.router.navigate(['/dashboard']);
        } else {
          // Gestisci errore di login
          alert('Login fallito!');
        }
      },
      (error) => {
        console.error('Errore durante il login', error);
        alert('Login fallito!');
      }
    );
  }
}
