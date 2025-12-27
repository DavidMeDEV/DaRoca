import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Consumer } from './consumer';

describe('Consumer', () => {
  let component: Consumer;
  let fixture: ComponentFixture<Consumer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Consumer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Consumer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
