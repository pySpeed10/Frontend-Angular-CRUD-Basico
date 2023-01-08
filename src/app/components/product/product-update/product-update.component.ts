import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../produto.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})

export class ProductUpdateComponent {
  constructor (private productService: ProductService,
    private router: Router, private route: ActivatedRoute) {}

    produto!: Produto;

    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      this.productService.readById(id).subscribe(produto => {
        this.produto = produto;
      });
    }

    updateProduto(): void {
      this.productService.update(this.produto).subscribe(()=> {
        this.productService.showMessage('Produto atualizado com exito!')
        this.router.navigate(['/produto'])
      });
    }

    cancel(): void {
      this.router.navigate(['/produto'])
    }
}
