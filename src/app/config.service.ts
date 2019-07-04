import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Books {
  isbn: Number,
  title: String,
  subtitle: String,
  author: String,
  published: String,
  publisher: String,
  pages: Number,
  description: String,
  website: String,
  book: String
}

@Injectable({
  providedIn: 'root'
})


export class ConfigService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000';
  
  public getBooks() {
    return this.http.get(`${this.url}/book`);
  }

  public getBooksByIsbn(isbn) {
    return this.http.get(`${this.url}/catalogue/`+isbn)
  }
}
