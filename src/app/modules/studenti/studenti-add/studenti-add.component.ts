import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { StudentiService } from '../../../services/studenti.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Studente } from '../../../models/studente.module';

@Component({
  selector: 'app-studenti-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './studenti-add.component.html',
  styleUrls: ['./studenti-add.component.css'],
})
export class StudentiAddComponent implements OnInit {
  studentForm!: FormGroup;
  request!: Studente;
  constructor(
    private fb: FormBuilder,
    private studentiService: StudentiService,
    private router: Router
  ) {
    this.request = new Studente(0, '', '', { city: '' });
  }
  ngOnInit(): void {
    this.studentForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: [''],
      city: [''],
    });
  }
  onSubmit() {
    if (this.studentForm.valid) {
      console.log(this.request);
      this.studentiService.addStudente(this.request).subscribe(() => {
        this.router.navigate(['/studenti']);
      });
    }
  }
}
