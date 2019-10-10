import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { UserMutations } from './mutations/user.mutations';
import { userVariables } from './mutations/__generated__/user';
import { UserQueries } from './queries/user.queries';
import { allUsers } from './queries/__generated__/allUsers';
import { AllUserGQL } from '../generated/graphql';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    private apollo: Apollo,
    private userMutations: UserMutations,
    private userQueries: UserQueries,
    private allUserGQL: AllUserGQL,
  ) {}

  getAllUsers() {
    return this.apollo.watchQuery({
      query: this.userQueries.allUsers,
      notifyOnNetworkStatusChange: true,
      pollInterval: 2000,
      fetchPolicy: 'network-only',
      errorPolicy: 'none',
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
