import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentiService } from '../../../services/studenti.service';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { AsyncPipe } from '@angular/common'; // Importa AsyncPipe
import $ from 'jquery'; // Importa jQuery come uno spazio dei nomi
import 'datatables.net'; // Importa DataTables
import { Studente } from '../../../models/studente.module';

@Component({
  selector: 'app-studenti-list',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './studenti-list.component.html',
  styleUrls: ['./studenti-list.component.css'],
})
export class StudentiListComponent implements OnInit {
  studenti$!: Observable<Studente[]>;

  constructor(private studentiService: StudentiService) {}

  ngOnInit() {
    this.studenti$ = this.studentiService.getStudenti();
  }

  ngAfterViewInit(): void {
    this.studenti$!.subscribe((data) => {
      if (data && data.length > 0) {
        // Inizializza DataTable solo quando i dati sono caricati
        $('#studentiTable').DataTable({
          data: data,
          columns: [
            { title: 'ID', data: 'id' },
            { title: 'Nome', data: 'name' },
            { title: 'Email', data: 'email' },
            { title: 'Indirizzo', data: 'address.city' },
          ],
        });
      }
    });
  }
}
