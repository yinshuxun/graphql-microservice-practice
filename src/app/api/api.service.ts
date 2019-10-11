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
    console.log('graphql-tag-ast', this.userQueries.allUsers);
    // this.apollo.getClient().writeQuery({
    //   query: this.userQueries.allUsers,
    //   data:{
    //     getUserList:[{name:'test'}]
    //   }
    // });
    // return this.apollo.getClient().readQuery({
    //   query: this.userQueries.allUsers,
    // });
    // WATCH QUERY
    return this.apollo.watchQuery({
      query: this.userQueries.allUsers,
      pollInterval: 2000,
      fetchPolicy: 'cache-and-network'
    });

    // generate allUserGQL
    // return this.allUserGQL.watch({
    //   pollInterval: 2000,
    // });
  }

  addUser(variables: userVariables) {
    return this.apollo.mutate({
      mutation: this.userMutations.createUser,
      variables,
    });
  }
}
