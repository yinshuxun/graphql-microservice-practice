import gql from 'graphql-tag';
import { Injectable } from '@angular/core';

@Injectable()
export class UserFragements {
  blogFragment = gql`
    fragment blogFragment on Blog {
      name
      blog_id
      content
    }
  `;

  userFragment = gql`
    fragment userFragment on User {
      name
      age
      user_id

      blogs {
        ...blogFragment
      }
    }
    ${this.blogFragment}
  `;
}
