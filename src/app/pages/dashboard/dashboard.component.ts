import { Component, OnInit } from '@angular/core';

import { emailSentBarChart, monthlyEarningChart, transactions, statData } from './data';

import { ChartType } from './dashboard.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

/**
 * Dashboard component
 */
export class DashboardComponent implements OnInit {
  
  dashboard_options = ["mobile", "camera", "headphone", "laptop", "Refrigerators", "Bicycle", "Handbag", "homedecor"]
  constructor() { }

  ngOnInit() {

    /**
     * Fetches the data
     */
    this.fetchData();
  }

  /**
   * Fetches the data
   */
  private fetchData() {

  }

}
