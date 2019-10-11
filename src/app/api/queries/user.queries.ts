import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { UserFragements } from '../fragments/user.fragment';

@Injectable()
export class UserQueries {
  constructor(private userFragements: UserFragements) {}

  allUsers = gql`
    query allUsers {
      getUserList {
        __typename
        ...userFragment
      }
    }
    ${this.userFragements.userFragment}
  `;
}
