import { Component, OnInit, Input, HostListener } from '@angular/core';
import { NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap/carousel/carousel.module';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-horizontal-carousel',
  templateUrl: './horizontal_carousel.component.html',
  styleUrls: ['./horizontal_carousel.component.scss'],
  providers: [NgbCarouselConfig]
})

export class HorizontalCarouselComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = false;
    config.showNavigationIndicators = true;
    config.interval = 0;
  }

  @Input() title: string;
  // @Input() products: any[];
  productList: any[];
  ARROW_LEFT: NgbSlideEventSource.ARROW_LEFT;
  ARROW_RIGHT: NgbSlideEventSource.ARROW_RIGHT;

  products = [{
    id: 1,
    product_name: 'Samsung Galaxy A51, 128 GB, 6GB RAM, Prism White',
    product_image: 'assets/images/products/mobile4.png',
    selling_price: 5680,
    actual_price: 7564,
    emi: 3237
  }, {
    id: 2,
    product_name: 'Samsung Galaxy A51, 128 GB, 6GB RAM, Prism White',
    product_image: 'assets/images/products/mobile2.png',
    selling_price: 9543,
    actual_price: 9894,
    emi: 4557
  }, {
    id: 3,
    product_name: 'Grand Prix',
    product_image: 'assets/images/products/mobile3.png',
    selling_price: 5701,
    actual_price: 7637,
    emi: 3291
  }, {
    id: 4,
    product_name: 'Samsung Galaxy A51, 128 GB, 6GB RAM, Prism White00',
    product_image: 'assets/images/products/mobile4.png',
    selling_price: 5268,
    actual_price: 9154,
    emi: 3572
  }, {
    id: 5,
    product_name: 'Lanos',
    product_image: 'assets/images/products/mobile3.png',
    selling_price: 9090,
    actual_price: 7235,
    emi: 4882
  }, {
    id: 6,
    product_name: '1500 Club Coupe',
    product_image: 'assets/images/products/mobile2.png',
    selling_price: 6326,
    actual_price: 8797,
    emi: 3946
  }, {
    id: 7,
    product_name: 'CR-V',
    product_image: 'assets/images/products/mobile3.png',
    selling_price: 5918,
    actual_price: 8763,
    emi: 4742
  }, {
    id: 8,
    product_name: 'E-Series',
    product_image: 'assets/images/products/mobile4.png',
    selling_price: 6139,
    actual_price: 7278,
    emi: 1724
  }];
  slides: any = [[]];
  chunkValue = window.innerWidth > 580 ? window.innerWidth > 992 ? 4 : 3 : 2;

  ngOnInit() {
    this.slides = this.chunk(this.products, this.chunkValue);
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.chunkValue = window.innerWidth > 580 ? window.innerWidth > 992 ? 4 : 3 : 2;
    this.slides = this.chunk(this.products, this.chunkValue);
  }

  chunk(arr: any, chunkSize: any) {
    const array = arr;
    const R = [];
    for (let i = 0, len = array.length; i < len; i += chunkSize) {
      R.push(array.slice(i, i + chunkSize));
    }
    return R;
  }
}
