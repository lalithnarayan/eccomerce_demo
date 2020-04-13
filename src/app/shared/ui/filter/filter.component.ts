import { Component, OnInit, Input } from '@angular/core';
import { NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap/carousel/carousel.module';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  providers: [NgbCarouselConfig]
})

export class FilterComponent implements OnInit {

  constructor() {
  }

  @Input() title: string;
  // @Input() products: any[];
  productList: any[];
  ARROW_LEFT: NgbSlideEventSource.ARROW_LEFT;
  ARROW_RIGHT: NgbSlideEventSource.ARROW_RIGHT;

  filterOptions = [
    {
      name: 'Price range',
      type: 'range',
      pricevalue : 250,
      minVal : 5000,
      maxVal : 25000,
      priceOption : {
        floor: 0,
        ceil: 99999,
        translate: (value: number): string => {
          return '₹' + value;
        }
      }
    },
    {
      name: 'Availability',
      type: 'multiSelect',
      key: 'avl',
      options: [
        {
          id: 1,
          name: 'Exclude out of stock',
          checked: true,
        }
      ]
    },
    {
      name: 'Brand',
      type: 'multiSelect',
      key: 'brand',
      options: [
        {
          id: 1,
          name: 'Samsung',
          checked: true,
        },
        {
          id: 2,
          name: 'Apple',
          checked: false,
        },
        {
          id: 3,
          name: 'Oppo',
          checked: false,
        },
        {
          id: 4,
          name: 'Vivo',
          checked: false
        }
      ]
    },
    {
      name: 'Ratings',
      type: 'rateUs',
      key: 'rating',
      options: [
        {
          id: 1,
          value: '4',
          checked: true,
        },
        {
          id: 2,
          value: '3',
          checked: false,
        },
        {
          id: 3,
          value: '2',
          checked: false,
        },
        {
          id: 4,
          value: '1',
          checked: false
        }
      ]
    }
  ];

  ngOnInit() {
  }
}
