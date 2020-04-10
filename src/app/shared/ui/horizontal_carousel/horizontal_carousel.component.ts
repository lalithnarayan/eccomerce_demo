import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-horizontal-carousel',
  templateUrl: './horizontal_carousel.component.html',
  styleUrls: ['./horizontal_carousel.component.scss']
})
export class HorizontalCarousel implements OnInit {

  @Input() data;
  @Input() title: string;
  images = [
    '/some/image/a.png',
    '/other/image/b.png',
    '/third/image/c.png',
    '/more/images/d.png',
  ];
  constructor() { }

  ngOnInit() {
  }

}
