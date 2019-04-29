/**
 * TODO: init node server by type-graphql
 */

import {ObjectType, Field, InputType} from 'type-graphql'

@ObjectType({description:'User model'})
export class User {
  @Field()
  id:number;

  @Field()
  name:string;

  @Field({ nullable: true })
  age?: number;
}

@InputType({ description: "New user data" })
export class AddUsernput implements Partial<User> {
  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;
}
