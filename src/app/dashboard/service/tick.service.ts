import { Injectable } from '@angular/core';
import {Subscription} from 'apollo-angular';
import gql from 'graphql-tag';
import {map, startWith} from 'rxjs/operators';
import {merge, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TickService extends Subscription {
  codeSubscriptions: Map<string, Observable<any>> = new Map();

  document = gql`
    subscription tick($selling: AssetID!, $buying: AssetID!) {
      tick(
        selling: $selling,
        buying: $buying
      ) {
        bestBid
        bestAsk
      }
    }
  `;

  subscribeToCodes(codes: string[]) {
    const ticks$ = codes.map((code, index ) => {
       if (!this.codeSubscriptions.has(code)) {
         this.codeSubscriptions.set(code, this.makeNewSubscription(code));
       }
       return this.codeSubscriptions.get(code);
    });
    return merge(...ticks$);
  }

  makeNewSubscription(code) {
    const newSubscription = this.subscribe({
      buying: 'native',
      selling: code
    }, {fetchPolicy: 'no-cache'}).pipe(
      startWith({data: {tick: {bestBid: 0, bestAsk: 0}}}),
      map(value => {
        return {
          code: code.substring(0, 3),
          value: value.data.tick.bestBid,
          ask: value.data.tick.bestAsk
        };
      }));
    return newSubscription;
  }
}
