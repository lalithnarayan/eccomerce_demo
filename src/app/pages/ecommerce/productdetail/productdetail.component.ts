import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

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
  slides: any[];
  images: any[];

  productOffers = [{
    id: 1,
    name: 'Pay later with Flexipay',
  }, {
    id: 2,
    name: 'Earn 10x Reward Points on HDFC Bank Credit Card'
  }, {
    id: 3,
    name: 'EMI starting at ₹ 1,990/m'
  }];

  colorOptions = [ {
    id: 1,
    name: 'Prism White',
    url: '',
  }, {
    id: 2,
    name: 'Green',
    url: '',
  }];

  sizeOptions = [ {
    id: 1,
    name: '4GB',
    url: '',
  }, {
    id: 2,
    name: '8GB',
    url: '',
  }];

  imageCarousel = [
    {
      id : 1,
      url : 'assets/images/product/img-7.png'
    },
    {
      id : 2,
      url : 'assets/images/product/img-8.png'
    },
    {
      id : 3,
      url : 'assets/images/product/img-7.png'
    },
    {
      id : 4,
      url : 'assets/images/product/img-8.png'
    },
    {
      id : 5,
      url : 'assets/images/product/img-7.png'
    },
    {
      id : 6,
      url : 'assets/images/product/img-8.png'
    },
    {
      id : 7,
      url : 'assets/images/product/img-8.png'
    },
    {
      id : 8,
      url : 'assets/images/product/img-8.png'
    },
    {
      id : 9,
      url : 'assets/images/product/img-8.png'
    },
    {
      id : 10,
      url : 'assets/images/product/img-8.png'
    }
  ];

  ARROW_LEFT: NgbSlideEventSource.ARROW_LEFT;
  ARROW_RIGHT: NgbSlideEventSource.ARROW_RIGHT;

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = false;
    config.showNavigationIndicators = true;
    config.interval = 0;
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Ecommerce' }, { label: 'Product Detail', active: true }];
    this.slides = this.chunk(this.imageCarousel, 6);
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

  chunk(arr: any, chunkSize: any) {
    const array = arr;
    const R = [];
    for (let i = 0, len = array.length; i < len; i += chunkSize) {
      R.push(array.slice(i, i + chunkSize));
    }
    return R;
  }
}
