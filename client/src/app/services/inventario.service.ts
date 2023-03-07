import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/Product';

@Injectable({
  providedIn: 'root',
})
export class InventarioService {

  API_URI = 'http://localhost:3000/api';

  constructor(private httpClient: HttpClient) {
    this.getAll();
  }
  getAll() {
    return this.httpClient.get(`${this.API_URI}/inventario`)
  }

  createOne(producto: Producto){
    return this.httpClient.post(`${this.API_URI}/inventario`, producto)
  }

  updateOne(producto: Producto){
    return this.httpClient.put(`${this.API_URI}/inventario`, producto)
  }
}
