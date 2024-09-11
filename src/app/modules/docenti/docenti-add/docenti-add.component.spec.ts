import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocentiAddComponent } from './docenti-add.component';

describe('DocentiAddComponent', () => {
  let component: DocentiAddComponent;
  let fixture: ComponentFixture<DocentiAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocentiAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocentiAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
