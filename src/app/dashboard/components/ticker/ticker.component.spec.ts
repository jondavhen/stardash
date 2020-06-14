import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TickerComponent } from './ticker.component';
import {LineChartComponent} from "../line-chart/line-chart.component";

describe('TickerComponent', () => {
  let component: TickerComponent;
  let fixture: ComponentFixture<TickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TickerComponent ]
    }).overrideTemplate(TickerComponent, "")
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
