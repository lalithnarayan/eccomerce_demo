import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NgbCarouselConfig, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss']
})

/**
 * Ecommerce product-detail component
 */
export class ProductdetailComponent implements OnInit {

  // @local Comment this for local use
  product;
  // @local Uncomment this for Local Use
  // product = {
  //   "code": "491350645",
  //   "name": "Inalsa Easy Toast Sandwhich Toaster",
  //   "category": "[\"Sandwich Makers\", \"Wet Grinders\"]",
  //   "type": "PROD",
  //   "action": "CREATE",
  //   "status": "APPROVED",
  //   "description": "Inalsa Easy Toast INOX Sandwich Maker is a 750 watts sandwich maker with non stick coated grill plates. It comes with vertical storage system and over heat safety protection. Other features of this sandwich maker are cord winder, easy locking and inox finish ss decorative cover on top.",
  //   "summary": "<li>Non-stick coated heating plates for easy cleaning</li>\n<li>Overheat safety protection, rubber feet</li>\n<li>Cool touch handle for safe toasting</li>\n<li>Simply & easy locking system</li><li>Shock Proof Heat Resistant Body: Inalsa Easy Toast is having a premium looking shock proof white spray painted body. This toaster is easy to clean and maintain and it comes with the non-slide rubber feet</li>\n<li>Automatic Thermostat: Inalsa Easy Toast is equipped with the Automatic Thermostat which helps for adequate temperature of uniform sandwich browning, Heating Plate: Triangular Type</li>\n<li>Quick Heating: Inalsa Easy Toast is fitted with 750 watt heating element for quick heating and cooking which means you can get more number of sandwich in lesser time. Over Heat Safety Protection is added advantage of this toaster</li>\n<li>Auto Scissor Cut: The cooking plates of this Inalsa toaster is made of Die Casted Aluminum Plates which cuts the sandwich with precise triangle design</li>\n<li>Concealed Element Cord: Unlike most of other toasters available in the market, Inalsa Easy Toast covers its cord and element offers an aesthetic looks. The cord of this sandwich maker can be stored nicely on its body to avoid hanging loosely</li>\n<li>Twin Storage Options: You may store this sandwich maker either horizontally or vertically as per your convenience or storage space availability</li>\n<li>Caution: For a long life of this toaster it is advised not to close the toaster with too much pressure. Also you should not use sharp objects on the non-stick coating as it will reduce its working life</li>",
  //   "brand": "Inalsa",
  //   "warranty": "2 Years",
  //   "demo_video_url": "",
  //   "service_type": "",
  //   "teaser_tag": "",
  //   "max_order_qty": 0,
  //   "mrp": 1695.0,
  //   "offer_price": 876.0,
  //   "searchable": true,
  //   "transactable": true,
  //   "in_stock": false,
  //   "cod": true,
  //   "active": true,
  //   "feature_groups": [
  //       {
  //           "name": "Technical Specifications",
  //           "Feature": {
  //               "name": "Indicators",
  //               "value": "Power-On Indicator"
  //           }
  //       },
  //       {
  //           "name": "General Information",
  //           "sequence": "1",
  //           "Feature": [
  //               {
  //                   "name": "Model",
  //                   "value": "Easy Toast"
  //               },
  //               {
  //                   "name": "Brand",
  //                   "value": "Inalsa"
  //               }
  //           ]
  //       },
  //       {
  //           "name": "Features",
  //           "Feature": [
  //               {
  //                   "name": "Plate Type",
  //                   "value": "Aluminium"
  //               },
  //               {
  //                   "name": "Functions Supported",
  //                   "value": "Toasting"
  //               }
  //           ]
  //       },
  //       {
  //           "name": "Physical Dimensions",
  //           "Feature": [
  //               {
  //                   "name": "Outer Material",
  //                   "value": "Bakellite"
  //               },
  //               {
  //                   "name": "Colour",
  //                   "value": "White"
  //               },
  //               {
  //                   "name": "Weight",
  //                   "value": "998 grams"
  //               }
  //           ]
  //       },
  //       {
  //           "name": "Power Details",
  //           "Feature": [
  //               {
  //                   "name": "Power Supply",
  //                   "value": "AC 230 V"
  //               },
  //               {
  //                   "name": "Power Consumption",
  //                   "value": "750 Watts"
  //               }
  //           ]
  //       },
  //       {
  //           "name": "In The Box & Warranty",
  //           "sequence": "1695",
  //           "Feature": {
  //               "name": "Warranty",
  //               "value": "2 Years"
  //           }
  //       }
  //   ],
  //   "references": [],
  //   "product_images": [
  //       {
  //           "_id": {
  //               "$oid": "5e985651af6dc15f317e2f2b"
  //           },
  //           "created_at": "2020-04-16T18:27:53.994+05:30",
  //           "image_path": {
  //               "url": "/uploads/images/product_image/image_path/5e985651af6dc15f317e2f2b/Inalsa-EASY-TOAST-Sandwich-Makers-491350645-i-1.jpeg",
  //               "thumb": {
  //                   "url": "/uploads/images/product_image/image_path/5e985651af6dc15f317e2f2b/thumb_Inalsa-EASY-TOAST-Sandwich-Makers-491350645-i-1.jpeg"
  //               }
  //           },
  //           "sequence": 1,
  //           "updated_at": "2020-04-16T18:27:53.994+05:30"
  //       }
  //   ],
  //   "image": {
  //       "url": "/uploads/images/product_image/image_path/5e985651af6dc15f317e2f2b/Inalsa-EASY-TOAST-Sandwich-Makers-491350645-i-1.jpeg",
  //       "thumb": {
  //           "url": "/uploads/images/product_image/image_path/5e985651af6dc15f317e2f2b/thumb_Inalsa-EASY-TOAST-Sandwich-Makers-491350645-i-1.jpeg"
  //       }
  //   },
  //   "id": "5e985612af6dc15f317e2e1e"
  // }



  breadCrumbItems: Array<{}>;
  slides: any[];
  images: any[];

  product_offers = [{
    id: 1,
    name: 'Pay later with Flexipay',
  }, {
    id: 2,
    name: 'Earn 10x Reward Points on HDFC Bank Credit Card'
  }, {
    id: 3,
    name: 'EMI starting at ₹ 1,990/m'
  }];

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

  imageCarousel = [
    {
      id : 10,
      url : 'assets/images/product/img-8.png'
    }
  ];

  ARROW_LEFT: NgbSlideEventSource.ARROW_LEFT;
  ARROW_RIGHT: NgbSlideEventSource.ARROW_RIGHT;

  constructor(
    config: NgbCarouselConfig,
    private route: ActivatedRoute,
    private location: Location,
    private apiService: ProductService
    ) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = false;
    config.showNavigationIndicators = true;
    config.interval = 0;
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Ecommerce' }, { label: 'Product Detail', active: true }];
    this.slides = this.chunk(this.imageCarousel, 6);

    const id = this.route.snapshot.paramMap.get('id');
    // @local Comment this for local use
    this.apiService.getOne(id).subscribe((data)=>{
      this.product = data;
    });
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
