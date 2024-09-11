import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocentiListComponent } from './docenti-list.component';

describe('DocentiListComponent', () => {
  let component: DocentiListComponent;
  let fixture: ComponentFixture<DocentiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocentiListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocentiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
