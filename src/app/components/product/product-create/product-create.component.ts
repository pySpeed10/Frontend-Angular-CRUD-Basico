import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Produto } from '../produto.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  produto: Produto = {
    nome: '',
    price: null
  }
  constructor (private productService: ProductService,
    private router: Router) {}

  ngOnInit(): void {

  }

  createProduto(): void {
    this.productService.create(this.produto).subscribe(()=> {
      this.productService.showMessage('Operação realizada com exito!')
      this.router.navigate(['/produto'])
    })


  }

  cancel(): void {
    this.router.navigate(['/produto'])
  }

}
