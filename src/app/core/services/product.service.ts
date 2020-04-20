import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../models/product.models';

@Injectable({ providedIn: 'root' })
export class ProductService {
    constructor(private httpClient: HttpClient) { }
    getAll() {
      return this.httpClient.get(`http://localhost:3000/rdstore/api/v1/products?page=1&page_size=24`,{
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      });
    }


    getOne(id) {
      return this.httpClient.get(`http://localhost:3000/rdstore/api/v1/products/`+id,{
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      });
    }
}
