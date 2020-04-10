import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss']
})

/**
 * Ecommerce product-detail component
 */
export class ProductdetailComponent implements OnInit {

  breadCrumbItems: Array<{}>;

  constructor() { }

  product_offers = [{
    id: 1,
    name: 'Pay later with Flexipay',
    
  }, {
    id: 2,
    name: 'Earn 10x Reward Points on HDFC Bank Credit Card'
  }, {
    id: 3,
    name: 'EMI starting at ₹ 1,990/m'
  }]

  color_options = [ {
    id: 1,
    name: 'Prism White',
    url: '',
  }, {
    id: 2,
    name: 'Green',
    url: '',
  }];

  size_options = [ {
    id: 1,
    name: '4GB',
    url: '',
  }, {
    id: 2,
    name: '8GB',
    url: '',
  }];

  products_u_may_like = [{
    "id": 1,
    "product_name": "Samsung Galaxy A51, 128 GB, 6GB RAM, Prism White",
    "product_image": "http://dummyimage.com/182x182.png/dddddd/000000",
    "selling_price": 5680,
    "actual_price": 7564,
    "emi": 3237
  }, {
    "id": 2,
    "product_name": "Samsung Galaxy A51, 128 GB, 6GB RAM, Prism White",
    "product_image": "http://dummyimage.com/182x182.png/5fa2dd/ffffff",
    "selling_price": 9543,
    "actual_price": 9894,
    "emi": 4557
  }, {
    "id": 3,
    "product_name": "Grand Prix",
    "product_image": "http://dummyimage.com/182x182.png/5fa2dd/ffffff",
    "selling_price": 5701,
    "actual_price": 7637,
    "emi": 3291
  }, {
    "id": 4,
    "product_name": "Samsung Galaxy A51, 128 GB, 6GB RAM, Prism White00",
    "product_image": "http://dummyimage.com/182x182.png/ff4444/ffffff",
    "selling_price": 5268,
    "actual_price": 9154,
    "emi": 3572
  }, {
    "id": 30,
    "product_name": "Amigo",
    "product_image": "http://dummyimage.com/182x182.png/5fa2dd/ffffff",
    "selling_price": 8750,
    "actual_price": 6615,
    "emi": 4887
  }, {
    "id": 30,
    "product_name": "Amigo",
    "product_image": "http://dummyimage.com/182x182.png/5fa2dd/ffffff",
    "selling_price": 8750,
    "actual_price": 6615,
    "emi": 4887
  }]


  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Ecommerce' }, { label: 'Product Detail', active: true }];
  }

  /**
   * onclick Image show
   * @param event image passed
   */
  imageShow(event) {
    const image = event.target.src;
    const expandImg = document.getElementById('expandedImg') as HTMLImageElement;
    expandImg.src = image;
  }
}
