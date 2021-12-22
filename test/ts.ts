export enum E {
  A = '1',
}

export class C {
  constructor(private a: string) {}

  fn(b) {
    return this.a == b
  }
}
