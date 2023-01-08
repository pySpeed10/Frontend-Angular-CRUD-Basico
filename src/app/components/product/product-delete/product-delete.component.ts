import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../produto.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent {
  constructor (private productService: ProductService,
    private router: Router, private route: ActivatedRoute) {}

    produto!: Produto;

    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      this.productService.readById(id).subscribe(produto => {
        this.produto = produto;
      });
    }

    excluirProduto(): void {
      this.productService.delete(this.produto.id).subscribe(()=> {
        this.productService.showMessage('Produto excluido com exito!')
        this.router.navigate(['/produto'])
      });
    }

    cancel(): void {
      this.router.navigate(['/produto'])
    }
}
