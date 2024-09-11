import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentiService } from '../../../services/studenti.service';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { AsyncPipe } from '@angular/common'; // Importa AsyncPipe
import * as $ from 'jquery'; // Importa jQuery come uno spazio dei nomi
import 'datatables.net'; // Importa DataTables

@Component({
  selector: 'app-studenti-list',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './studenti-list.component.html',
  styleUrls: ['./studenti-list.component.css'],
})
export class StudentiListComponent implements OnInit {
  studenti$: Observable<any[]> | undefined;

  constructor(private studentiService: StudentiService) {}

  ngOnInit() {
    this.studenti$ = this.studentiService.getStudenti();
  }

  ngAfterViewInit(): void {
    // Inizializza DataTables dopo che la vista è stata renderizzata
    $('#studentiTable').DataTable();
  }
}
