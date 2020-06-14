
export interface TickData {
  label?: string;
  data: number[];
  open?: number;
  high?: number;
  low?: number;
}

// max # of ticks to keep around
const maxTicks = 10000;

export class TickDataCollection {
  tickers: TickData[] = [];
  tickLabels: string[] = [];

  constructor(currencyCodes: string[] = []) {
    for (const code of currencyCodes) {
      this.tickers.push({label: code, data: []} as TickData);
    }
  }

  addTick(currency: string, value: number) {
    if (!value) {
      return;
    }
    for (const tick of this.tickers) {
      if (tick.label === currency) {
        tick.data.push(value);
        if (!tick.open) {
          tick.open = value;
        }
        if (!tick.high || tick.high < value) {
          tick.high = value;
        }
        if (!tick.low || tick.low > value ) {
          tick.low = value;
        }
      } else {
        tick.data.push(null);
      }
      if (tick.data.length > maxTicks) {
        tick.data.shift();
      }
    }
    this.tickLabels.push('' + this.tickLabels.length);
    this.tickLabels = [...this.tickLabels];
    if (this.tickLabels.length > maxTicks) {
      this.tickLabels.shift();
    }
  }
}
