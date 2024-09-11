import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { StudentiRoutingModule } from './studenti-routing.module';
import { StudentiService } from '../../services/studenti.service';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, StudentiRoutingModule],
  providers: [StudentiService],
})
export class StudentiModule {}
