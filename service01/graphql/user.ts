import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';
import mysqlConnection from './mysql';

const Status = new GraphQLObjectType({
  name:"status",
  fields:{
    code:{
      type:GraphQLInt
    }
  }
})

const User = new GraphQLObjectType({
  name: 'User',
  fields: {
    user_id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    age: {
      type: GraphQLInt,
    },
  },
});

export const getUserList = {
  type: new GraphQLList(User),
  description: 'get all users',
  resolve: async (_source, _params) => {
    let users = await mysqlConnection.pifySelect('select * from user');
    return users;
  },
};

export const getUserByParam = {
  type: User,
  args:{
    name:{
      type: GraphQLString
    }
  },
  description: 'get user by name',
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
  args:{
    name:{
      type: new GraphQLNonNull(GraphQLString)
    },
    age:{
      type: GraphQLInt,
      defaultValue:null
    }
  },
  resolve: async (_source, _params) => {
    const {name,age} = _params
    await mysqlConnection.pifySelect(
      `insert into user (name,age) values ("${name}",${age})`,
    );
    return {
      code : 200
    };
  },
};
