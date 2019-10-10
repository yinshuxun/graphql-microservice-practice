import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  buildSchema,
} from 'graphql';
import mysqlConnection from './mysql';

const Status = new GraphQLObjectType({
  name: 'status',
  fields: {
    code: {
      type: GraphQLInt,
      description:"创建接口状态，200:创建成功"
    },
  },
});

const User = new GraphQLObjectType({
  name: 'User',
  fields: {
    user_id: {
      type: GraphQLID,
      description:"用户id",
    },
    name: {
      type: GraphQLString,
      description:"用户姓名"
    },
    age: {
      type: GraphQLInt,
      description:"用户年龄"
    },
    user_uuid:{
      type: GraphQLID,
      description:"用户uuid",
      deprecationReason: "这个属性废弃"
    }
  },
});

export const getUserList = {
  type: new GraphQLList(User),
  description: '这是获取用户列表的接口',
  resolve: async (_source, _params) => {
    let users = await mysqlConnection.pifySelect('select * from user');
    return users;
  },
};

export const getUserByParam = {
  type: User,
  args: {
    name: {
      type: GraphQLString,
    },
  },
  description: '通过传入用户用户姓名查询用户信息',
  resolve: async (_source, _params) => {
    let users = await mysqlConnection.pifySelect(
      `select * from user where name='${_params.name}'`,
    );
    return users[0];
  },
};

export const createUser = {
  name: 'createUser',
  type: Status,
  description: '创建用户，需要传入 姓名、年龄',
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description:"需要创建的用户名称"
    },
    age: {
      type: GraphQLInt,
      description:"需要创建的用户的年龄",
      defaultValue: null,
    },
  },
  resolve: async (_source, _params) => {
    const { name, age } = _params;
    await mysqlConnection.pifySelect(
      `insert into user (name,age) values ("${name}",${age})`,
    );
    return {
      code: 200,
    };
  },
};
