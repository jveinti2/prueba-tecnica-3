import { Component } from '@angular/core';
import {InventarioService} from '../../services/inventario.service'

@Component({
  selector: 'app-inventario-list',
  templateUrl: './inventario-list.component.html',
  styleUrls: ['./inventario-list.component.css']
})
export class InventarioListComponent {

  productos: any

  constructor(private inventarioService: InventarioService){}

  ngOnInit(){
    this.getAll()
  }

  getAll(){
    this.inventarioService.getAll().subscribe(
      res=> {
        this.productos = res
      },
      err => console.log(err)
      
    )
  }

  
  

}
