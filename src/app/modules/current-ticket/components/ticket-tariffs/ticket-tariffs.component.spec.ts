import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketTariffsComponent } from './ticket-tariffs.component';

describe('TicketTariffsComponent', () => {
  let component: TicketTariffsComponent;
  let fixture: ComponentFixture<TicketTariffsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketTariffsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketTariffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
