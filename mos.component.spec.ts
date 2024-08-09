import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MosComponent } from './mos.component';

describe('MosComponent', () => {
  let component: MosComponent;
  let fixture: ComponentFixture<MosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MosComponent]
    });
    fixture = TestBed.createComponent(MosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
