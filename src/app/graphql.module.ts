import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS, Apollo} from 'apollo-angular';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {WebSocketLink} from 'apollo-link-ws';
import {environment} from '../environments/environment';


export function createApollo() {
  return {
    link: new WebSocketLink({
      uri: environment.apiUri,
      options: {
        reconnect: true
      }
    }),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo
    },
  ],
})
export class GraphQLModule {}
