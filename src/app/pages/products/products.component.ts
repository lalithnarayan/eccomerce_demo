import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

/**
 * Ecommerce products component
 */
export class ProductsComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  showPopup = false;

  products;

  constructor(private apiService: ProductService) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Ecommerce' }, { label: 'Products', active: true }];
    this.apiService.getAll().subscribe((data)=>{
      this.products = data;
    });
  }
}
