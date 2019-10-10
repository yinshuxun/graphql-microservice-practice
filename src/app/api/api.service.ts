import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { UserMutations } from './mutations/user.mutations';
import { userVariables } from './mutations/__generated__/user';
import { UserQueries } from './queries/user.queries';
import { allUsers } from './queries/__generated__/allUsers';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    private apollo: Apollo,
    private userMutations: UserMutations,
    private userQueries: UserQueries,
  ) {}

  getAllUsers() {
    console.log('graphql-tag-ast',this.userQueries.allUsers)
    return this.apollo.watchQuery({
      query: this.userQueries.allUsers,
      pollInterval: 2000,
      fetchPolicy: 'network-only',
    });
  }

  addUser(variables: userVariables) {
    return this.apollo.mutate({
      mutation: this.userMutations.createUser,
      variables,
    });
  }
}
