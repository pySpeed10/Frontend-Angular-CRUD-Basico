import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Produto } from '../produto.model';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {
  produtos!: Produto[];
  displayedColumns = ['id', 'nome', 'price', 'actions'];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.read().subscribe(produtos => {
      this.produtos = produtos
      console.log(produtos)
    })
  }
}
