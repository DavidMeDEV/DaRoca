import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Farmer } from './farmer';

describe('Farmer', () => {
  let component: Farmer;
  let fixture: ComponentFixture<Farmer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Farmer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Farmer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
