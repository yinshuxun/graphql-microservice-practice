/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: user
// ====================================================

export interface user_createUser {
  __typename: "status";
  /**
   * 创建接口状态，200:创建成功
   */
  code: number | null;
}

export interface user {
  /**
   * 创建用户，需要传入 姓名、年龄
   */
  createUser: user_createUser | null;
}

export interface userVariables {
  name: string;
  age: number;
}
