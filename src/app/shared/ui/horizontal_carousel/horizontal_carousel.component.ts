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
    product_image: 'http://dummyimage.com/182x182.png/dddddd/000000',
    selling_price: 5680,
    actual_price: 7564,
    emi: 3237
  }, {
    id: 2,
    product_name: 'Samsung Galaxy A51, 128 GB, 6GB RAM, Prism White',
    product_image: 'http://dummyimage.com/182x182.png/5fa2dd/ffffff',
    selling_price: 9543,
    actual_price: 9894,
    emi: 4557
  }, {
    id: 3,
    product_name: 'Grand Prix',
    product_image: 'http://dummyimage.com/182x182.png/5fa2dd/ffffff',
    selling_price: 5701,
    actual_price: 7637,
    emi: 3291
  }, {
    id: 4,
    product_name: 'Samsung Galaxy A51, 128 GB, 6GB RAM, Prism White00',
    product_image: 'http://dummyimage.com/182x182.png/ff4444/ffffff',
    selling_price: 5268,
    actual_price: 9154,
    emi: 3572
  }, {
    id: 5,
    product_name: 'Lanos',
    product_image: 'http://dummyimage.com/182x182.png/5fa2dd/ffffff',
    selling_price: 9090,
    actual_price: 7235,
    emi: 4882
  }, {
    id: 6,
    product_name: '1500 Club Coupe',
    product_image: 'http://dummyimage.com/182x182.png/5fa2dd/ffffff',
    selling_price: 6326,
    actual_price: 8797,
    emi: 3946
  }, {
    id: 7,
    product_name: 'CR-V',
    product_image: 'http://dummyimage.com/182x182.png/dddddd/000000',
    selling_price: 5918,
    actual_price: 8763,
    emi: 4742
  }, {
    id: 8,
    product_name: 'E-Series',
    product_image: 'http://dummyimage.com/182x182.png/dddddd/000000',
    selling_price: 6139,
    actual_price: 7278,
    emi: 1724
  }, {
    id: 9,
    product_name: 'Tempo',
    product_image: 'http://dummyimage.com/182x182.png/5fa2dd/ffffff',
    selling_price: 5459,
    actual_price: 7195,
    emi: 3949
  }, {
    id: 10,
    product_name: 'SC',
    product_image: 'http://dummyimage.com/182x182.png/ff4444/ffffff',
    selling_price: 6855,
    actual_price: 8892,
    emi: 3116
  }, {
    id: 11,
    product_name: 'Clubman',
    product_image: 'http://dummyimage.com/182x182.png/cc0000/ffffff',
    selling_price: 5879,
    actual_price: 9276,
    emi: 2254
  }, {
    id: 12,
    product_name: 'Z4',
    product_image: 'http://dummyimage.com/182x182.png/ff4444/ffffff',
    selling_price: 7988,
    actual_price: 5136,
    emi: 3542
  }, {
    id: 13,
    product_name: 'W126',
    product_image: 'http://dummyimage.com/182x182.png/ff4444/ffffff',
    selling_price: 6626,
    actual_price: 5107,
    emi: 2526
  }, {
    id: 14,
    product_name: 'Bronco II',
    product_image: 'http://dummyimage.com/182x182.png/cc0000/ffffff',
    selling_price: 5592,
    actual_price: 7097,
    emi: 350
  }, {
    id: 15,
    product_name: 'Rapide',
    product_image: 'http://dummyimage.com/182x182.png/ff4444/ffffff',
    selling_price: 8974,
    actual_price: 5028,
    emi: 4874
  }, {
    id: 16,
    product_name: 'ZDX',
    product_image: 'http://dummyimage.com/182x182.png/dddddd/000000',
    selling_price: 6429,
    actual_price: 7865,
    emi: 3347
  }, {
    id: 17,
    product_name: 'Silverado 3500',
    product_image: 'http://dummyimage.com/182x182.png/cc0000/ffffff',
    selling_price: 6518,
    actual_price: 5613,
    emi: 2817
  }, {
    id: 18,
    product_name: '6000',
    product_image: 'http://dummyimage.com/182x182.png/cc0000/ffffff',
    selling_price: 7441,
    actual_price: 8735,
    emi: 2652
  }, {
    id: 19,
    product_name: 'Focus',
    product_image: 'http://dummyimage.com/182x182.png/dddddd/000000',
    selling_price: 9662,
    actual_price: 7743,
    emi: 2634
  }, {
    id: 20,
    product_name: 'Savana 1500',
    product_image: 'http://dummyimage.com/182x182.png/ff4444/ffffff',
    selling_price: 5844,
    actual_price: 9235,
    emi: 1488
  }, {
    id: 21,
    product_name: 'Electra',
    product_image: 'http://dummyimage.com/182x182.png/5fa2dd/ffffff',
    selling_price: 6017,
    actual_price: 7948,
    emi: 4449
  }, {
    id: 22,
    product_name: 'Aveo',
    product_image: 'http://dummyimage.com/182x182.png/ff4444/ffffff',
    selling_price: 6881,
    actual_price: 7031,
    emi: 564
  }, {
    id: 23,
    product_name: 'Tacoma Xtra',
    product_image: 'http://dummyimage.com/182x182.png/5fa2dd/ffffff',
    selling_price: 8748,
    actual_price: 9620,
    emi: 1328
  }, {
    id: 24,
    product_name: 'Focus',
    product_image: 'http://dummyimage.com/182x182.png/dddddd/000000',
    selling_price: 6080,
    actual_price: 8843,
    emi: 821
  }, {
    id: 25,
    product_name: 'Avalon',
    product_image: 'http://dummyimage.com/182x182.png/ff4444/ffffff',
    selling_price: 6356,
    actual_price: 9501,
    emi: 4726
  }, {
    id: 26,
    product_name: 'MX-5',
    product_image: 'http://dummyimage.com/182x182.png/dddddd/000000',
    selling_price: 7854,
    actual_price: 7432,
    emi: 1819
  }, {
    id: 27,
    product_name: 'Sundance',
    product_image: 'http://dummyimage.com/182x182.png/5fa2dd/ffffff',
    selling_price: 9867,
    actual_price: 5992,
    emi: 2260
  }, {
    id: 28,
    product_name: 'Sebring',
    product_image: 'http://dummyimage.com/182x182.png/ff4444/ffffff',
    selling_price: 5786,
    actual_price: 9304,
    emi: 301
  }, {
    id: 29,
    product_name: 'Mariner',
    product_image: 'http://dummyimage.com/182x182.png/ff4444/ffffff',
    selling_price: 6946,
    actual_price: 9987,
    emi: 470
  }, {
    id: 30,
    product_name: 'Amigo',
    product_image: 'http://dummyimage.com/182x182.png/5fa2dd/ffffff',
    selling_price: 8750,
    actual_price: 6615,
    emi: 4887
  }];
  slides: any = [[]];
  chunkValue = window.innerWidth > 580 ? window.innerWidth > 992 ? 6 : 3 : 2;

  ngOnInit() {
    this.slides = this.chunk(this.products, this.chunkValue);
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.chunkValue = window.innerWidth > 580 ? window.innerWidth > 992 ? 6 : 3 : 2;
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
