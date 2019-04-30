export type User = {
  user_id: number;
  name: string;
  blogs?: Blog[];
};

export type Blog = {
  blog_id: number;
  user_Id: number;
  name?: string;
  content?: string;
};
export type Query = {
  getUserList: User[];
};
