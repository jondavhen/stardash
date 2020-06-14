import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TickService} from '../../service/tick.service';
import {filter, map, tap} from 'rxjs/operators';
import {TickDataCollection} from '../../model/dashboard.model';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.css']
})
export class TickerComponent implements OnChanges {
  @Input() currencies: string;
  ticks$: any = null;
  tickData: TickDataCollection = null;
  loaded = false;

  constructor(private tickService: TickService) {}

  subscribeToTicks(codes: string[]): void {
    this.ticks$ = this.tickService.subscribeToCodes(codes)
      .pipe(
        filter(arg => arg.value > 0),
        tap(arg => {
          this.tickData.addTick(arg.code, arg.value);
        }),
        map(arg => {
          return`${arg.value}`;
        })
      );
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!this.loaded && changes.currencies) {
      const currencies = changes.currencies.currentValue.split(',')
        .map(name => name.trim());
      this.tickData = new TickDataCollection(currencies);
      const codes = environment.tickerCurrencyCodes.filter(code => {
        for (const name of currencies) {
          if (code.startsWith(name)) {
            return true;
          }
        }
        return false;
      });
      this.subscribeToTicks(codes);
      this.loaded = true;
    }
  }
 }
