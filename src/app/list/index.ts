import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';
import { User, Query } from '../types';
@Component({
  selector: 'app-list',
  templateUrl: './index.html',
  styleUrls: [
    "../../../node_modules/bootstrap/dist/css/bootstrap.min.css",
    "index.scss"
  ]
})
export class ListComponent implements OnInit {
  users: Observable<User[]>;
  constructor(private apollo: Apollo) { }
  ngOnInit() {
    this.users = this.apollo.watchQuery<Query>({
      query: gql`
        query {
          getUserList {
            user_id
            name
            blogs {
              name
              blog_id
              content
            }
          }
        }
      `
    })
      .valueChanges
      .pipe(
        map(result => result.data.getUserList)
      );
  }
}
