import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};



/** 这是博客模型 */
export type Blog = {
   __typename?: 'Blog',
  /** 博客id */
  blog_id: Scalars['Int'],
  /** 博客内容 */
  content?: Maybe<Scalars['String']>,
  /** 博客名称 */
  name?: Maybe<Scalars['String']>,
  /** 博客创建者id */
  user_id: Scalars['Int'],
  author?: Maybe<User>,
};

export type Mutation = {
   __typename?: 'Mutation',
  /** 创建用户，需要传入 姓名、年龄 */
  createUser?: Maybe<Status>,
};


export type MutationCreateUserArgs = {
  name: Scalars['String'],
  age?: Maybe<Scalars['Int']>
};

export type Query = {
   __typename?: 'Query',
  /** 这是获取用户列表的接口 */
  getUserList?: Maybe<Array<Maybe<User>>>,
  /** 通过传入用户用户姓名查询用户信息 */
  getUserByParam?: Maybe<User>,
  /** 博客列表 */
  getBlogs?: Maybe<Array<Maybe<Blog>>>,
  /** 通过userid获取博客列表 */
  getBlogsByUserId?: Maybe<Array<Maybe<Blog>>>,
};


export type QueryGetUserByParamArgs = {
  name?: Maybe<Scalars['String']>
};


export type QueryGetBlogsByUserIdArgs = {
  user_id: Scalars['Int']
};

export type Status = {
   __typename?: 'status',
  /** 创建接口状态，200:创建成功 */
  code?: Maybe<Scalars['Int']>,
};

export type User = {
   __typename?: 'User',
  /** 用户id */
  user_id?: Maybe<Scalars['ID']>,
  /** 用户姓名 */
  name?: Maybe<Scalars['String']>,
  /** 用户年龄 */
  age?: Maybe<Scalars['Int']>,
  /** 用户uuid */
  user_uuid?: Maybe<Scalars['ID']>,
  blogs?: Maybe<Array<Maybe<Blog>>>,
};

export type AllUserQueryVariables = {};


export type AllUserQuery = (
  { __typename?: 'Query' }
  & { getUserList: Maybe<Array<Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'name' | 'user_id'>
    & { blogs: Maybe<Array<Maybe<(
      { __typename?: 'Blog' }
      & Pick<Blog, 'name'>
    )>>> }
  )>>> }
);


export const AllUserDocument = gql`
    query allUser {
  getUserList {
    name
    user_id
    blogs {
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AllUserGQL extends Apollo.Query<AllUserQuery, AllUserQueryVariables> {
    document = AllUserDocument;
    
  }
export namespace AllUser {
  export type Variables = AllUserQueryVariables;
  export type Query = AllUserQuery;
  export type GetUserList = AllUserQuery['getUserList'][0];
  export type Blogs = AllUserQuery['getUserList'][0]['blogs'][0];
}
