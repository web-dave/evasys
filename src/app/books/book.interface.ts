export interface IBook {
  title: string;
  subtitle: string;
  isbn: string;
  abstract: string;
  numPages: number;
  author: string;
  publisher: string;
  price: string;
  cover: string;
  id?: string;
  userId?: number;
}
