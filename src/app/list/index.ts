import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';
import { Course, Query } from '../types';
@Component({
  selector: 'app-list',
  templateUrl: './index.html',
  styleUrls: [
    "../../../node_modules/bootstrap/dist/css/bootstrap.min.css",
    "index.scss"
  ]
})
export class ListComponent implements OnInit {
  courses: Observable<Course[]>;
  constructor(private apollo: Apollo) { }
  ngOnInit() {
    this.courses = this.apollo.watchQuery<Query>({
      query: gql`
        query allCourses {
          getCourseList {
            id
            desc
            title
            page
          }
        }
      `
    })
      .valueChanges
      .pipe(
        map(result => result.data.allCourses)
      );
  }
}
