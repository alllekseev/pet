import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryFiltersComponent } from './history-filters.component';

describe('HistoryFiltersComponent', () => {
  let component: HistoryFiltersComponent;
  let fixture: ComponentFixture<HistoryFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
