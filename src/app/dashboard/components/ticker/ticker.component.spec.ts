import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TickerComponent } from './ticker.component';
import {ApolloTestingModule} from 'apollo-angular/testing';

describe('TickerComponent', () => {
  let component: TickerComponent;
  let fixture: ComponentFixture<TickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ApolloTestingModule],
      declarations: [ TickerComponent ]
    }).overrideTemplate(TickerComponent, '')
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
