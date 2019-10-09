import { Injectable } from '@angular/core';
import gql from 'graphql-tag';

@Injectable()
export class UserMutations {
  createUser = gql`
    mutation user($name: String!, $age: Int!) {
      createUser(name: $name, age: $age) {
        code
      }
    }
  `;
}
