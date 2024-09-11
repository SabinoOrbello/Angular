import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentiListComponent } from './studenti-list.component';

describe('StudentiListComponent', () => {
  let component: StudentiListComponent;
  let fixture: ComponentFixture<StudentiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentiListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
