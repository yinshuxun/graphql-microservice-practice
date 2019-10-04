import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { MatSnackBar } from '@angular/material';

const createMutation = gql`
  mutation user($name: String!, $age: Int!) {
    createUser(name: $name, age: $age) {
      code
    }
  }
`;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'graphql-microservice-demo';
  formData: FormGroup;
  code: string;
  constructor(
    fb: FormBuilder,
    private apollo: Apollo,
    private snackBar: MatSnackBar,
  ) {
    this.formData = fb.group({
      name: [],
      age: [],
    });
  }

  addUser() {
    console.log(this.formData.value);
    this.apollo
      .mutate({
        mutation: createMutation,
        variables: this.formData.value,
        // optimisticResponse: {
        //   __typename: 'Mutation',
        //   createUser: {
        //     __typename: 'Status',
        //     code: this.code,
        //   },
        // },
      })
      .subscribe(
        v => {
          this.snackBar.open('添加成功', '关闭', {
            duration: 2000,
          });
          this.formData.setValue({ name: '', age: '' });
        },
        error => {
          console.log('there was an error sending the query', error);
        },
      );
  }
}
