import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ApiService } from './api/api.service';

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
    private snackBar: MatSnackBar,
    private api: ApiService,
  ) {
    this.formData = fb.group({
      name: [],
      age: [],
    });
  }

  addUser() {
    console.log(this.formData.value);
    this.api.addUser(this.formData.value).subscribe(
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
