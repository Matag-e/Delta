import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products = [
    { id: 1, name: 'MOP', description: 'Kit com balde, espremedor, MOB Redondo e cabo', price: 150, image: 'mop.jpg' },
    { id: 2, name: 'Cera', description: 'Cera Liquida incolor de autobrilho.', price: 50, image: 'cera.png' },
    { id: 3, name: 'Luva', description: 'Luva de vinil descartável, leve e flexível', price: 15, image: 'luva.jpg' },
  ]

  addToCart(product: any) {
    Swal.fire({
      title: 'Produto Adicionado',
      text: 'Produto adicionado ao carrinho!',
      icon: 'success',
    })
  }

}
