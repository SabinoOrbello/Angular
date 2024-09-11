import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Studente } from '../models/studente.module';

@Injectable({
  providedIn: 'root',
})
export class StudentiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getStudenti(): Observable<Studente[]> {
    return this.http.get<Studente[]>(this.apiUrl);
  }

  addStudente(studente: Studente): Observable<Studente> {
    return this.http.post<Studente>(this.apiUrl, studente);
  }
}
