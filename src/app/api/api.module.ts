import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApolloModule, Apollo } from 'apollo-angular';
import { ApiService } from './api.service';
import { UserQueries } from './queries/user.queries';
import { UserFragements } from './fragments/user.fragment';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { UserMutations } from './mutations/user.mutations';

@NgModule({
  imports: [CommonModule, ApolloModule, HttpLinkModule],
  providers: [ApiService, UserQueries, UserFragements, UserMutations],
})
export class ApiModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      link: httpLink.create({ uri: 'http://localhost:4000/graphql' }),
      cache: new InMemoryCache(),
    });
  }
}
