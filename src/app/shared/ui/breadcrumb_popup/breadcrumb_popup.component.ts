import { Component, OnInit, Input } from '@angular/core';
import { NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap/carousel/carousel.module';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-breadcrumb-popup',
  templateUrl: './breadcrumb_popup.component.html',
  styleUrls: ['./breadcrumb_popup.component.scss'],
  providers: [NgbCarouselConfig]
})

export class BreadCrumbPopupComponent implements OnInit {

  constructor() {
  }

  @Input() title: string;
  // @Input() products: any[];
  selectedIndex = 0;

  categories = [
    {
      name: 'Mobiles and Tablets',
      options: [
        {
          name: 'Smart Phones',
          options: []
        },
        {
          name: 'Wearable Tech',
          options: [
            {
              name: 'Smart Watches'
            },
            {
              name: 'Fitness Bands'
            }
          ]
        }
      ]
    },
    {
      name: 'Computers',
      options: [
        {
          name: 'Computers',
          options: []
        },
        {
          name: 'Laptops',
          options: [
            {
              name: 'Gaming Laptops'
            },
            {
              name: 'High-end Laptops'
            }
          ]
        }
      ]
    }
  ];

  ngOnInit() {
  }
}
