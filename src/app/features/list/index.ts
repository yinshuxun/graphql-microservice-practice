import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';
import { ApiService } from '../../api/api.service';
import { allUsers_getUserList } from '../../api/queries/__generated__/allUsers';
@Component({
  selector: 'app-list',
  templateUrl: './index.html',
  styleUrls: [
    '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css',
    'index.scss',
  ],
})
export class ListComponent implements OnInit {
  users$: Observable<allUsers_getUserList[]>;
  constructor(private apollo: Apollo, private api: ApiService) {}
  ngOnInit() {
    this.users$ = this.api
      .getAllUsers()
      .valueChanges.pipe(map(result => result.data.getUserList));
  }
}
