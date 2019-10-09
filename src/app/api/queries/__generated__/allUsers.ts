/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: allUsers
// ====================================================

export interface allUsers_getUserList_blogs {
  __typename: "Blog";
  /**
   * 博客名称
   */
  name: string | null;
  /**
   * 博客id
   */
  blog_id: number;
  /**
   * 博客内容
   */
  content: string | null;
}

export interface allUsers_getUserList {
  __typename: "User";
  /**
   * 用户id
   */
  user_id: string | null;
  /**
   * 用户姓名
   */
  name: string | null;
  blogs: (allUsers_getUserList_blogs | null)[] | null;
}

export interface allUsers {
  /**
   * 这是获取用户列表的接口
   */
  getUserList: (allUsers_getUserList | null)[] | null;
}
