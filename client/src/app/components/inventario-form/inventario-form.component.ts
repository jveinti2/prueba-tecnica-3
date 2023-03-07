import { Component } from '@angular/core';
import { Producto } from '../../interfaces/Product';
import { InventarioService } from '../../services/inventario.service';

@Component({
  selector: 'app-inventario-form',
  templateUrl: './inventario-form.component.html',
  styleUrls: ['./inventario-form.component.css'],
})
export class InventarioFormComponent {
  producto: Producto = {
    id_ref: 0,
    nombre: '',
    detalle: '',
    imagen: '',
    precio: 0,
    cantidad: 0,
  };

  productos_existentes: any;

  existente: boolean = false;

  constructor(private inventarioService: InventarioService) {
    this.getAll();
  }

  getAll() {
    this.inventarioService.getAll().subscribe(
      (res) => {
        this.productos_existentes = res;
      },
      (err) => console.error(err)
    );
  }

  createOne(producto: Producto) {
    this.inventarioService.createOne(producto).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => console.error(err)
    );
  }

  updateOne(producto: Producto) {
    this.inventarioService.updateOne(producto).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => console.error(err)
    );
  }
}
