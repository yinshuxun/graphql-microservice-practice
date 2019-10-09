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
    return this.apollo.watchQuery<allUsers>({
      query: this.userQueries.allUsers,
    });
  }

  addUser(variables: userVariables) {
    return this.apollo.mutate({
      mutation: this.userMutations.createUser,
      variables,
      // optimisticResponse: {
      //   __typename: 'Mutation',
      //   createUser: {
      //     __typename: 'Status',
      //     code: this.code,
      //   },
      // },
    });
  }
}
