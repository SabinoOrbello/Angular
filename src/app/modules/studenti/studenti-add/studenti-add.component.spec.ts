import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentiAddComponent } from './studenti-add.component';

describe('StudentiAddComponent', () => {
  let component: StudentiAddComponent;
  let fixture: ComponentFixture<StudentiAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentiAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentiAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
