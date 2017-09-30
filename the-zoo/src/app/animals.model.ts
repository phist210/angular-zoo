/**
 * Provides a `Animal` object
 */
export class Animal {
    constructor(
      public name: string,
      public species: string,
      public height: number,
      public weight: number,
      public quantity: number,
      public imageUrl?: string,
      public desc?: string,
    ){}
}
  