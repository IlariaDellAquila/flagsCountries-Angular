import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotellinaComponent } from './rotellina.component';

describe('RotellinaComponent', () => {
  let component: RotellinaComponent;
  let fixture: ComponentFixture<RotellinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotellinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RotellinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
