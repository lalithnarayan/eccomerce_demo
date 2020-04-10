import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

/**
 * Footer component
 */
export class FooterComponent implements OnInit {

  // set the currenr year
  year: number = new Date().getFullYear();
      
  footer_urls = [
    {"id":1,"name":"About Us","url":"Incidunt et magni"},
    {"id":2,"name":"FAQ’s ","url":"Sint libero mollitia"},
    {"id":3,"name":"Terms & Conditions","url":"In consequuntur cupiditat"},
    {"id":4,"name":"Privacy Policy","url":"Saepe nemo praesentium"},
    {"id":4,"name":"Customer Support","url":"Saepe nemo praesentium"}
];
  constructor() { }

  ngOnInit() {
  }

}
