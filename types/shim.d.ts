import 'mysql';

declare module mysql {
  interface Connection {
    pifySelect: (i: string) => void;
  }
}
