import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('assets/products.json');
    // [
    //   {id: 1, name: 'Aspirine', inStock: true},
    //   {id: 2, name: 'Zanax', inStock: false},
    //   {id: 3, name: 'Protein', inStock: true},
    //   {id: 4, name: 'Vitamin', inStock: true}
    // ];
  }
}
