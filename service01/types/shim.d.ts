import * as mysql from 'mysql'

declare module 'mysql' {
  interface Connection {
    pifySelect:(i:string)=>void
  }
}

export default mysql;

