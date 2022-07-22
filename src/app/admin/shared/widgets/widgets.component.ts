import { Component, Input, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { DashboardService } from '../../services/dashboardService/dashboard.service';
Chart.register(...registerables);

@Component({
  selector: 'chart',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss']
})
export class WidgetsComponent implements OnInit {
  @Input() title: string = '';
  myChart:any
  chart:any;
 

  constructor(private data: DashboardService) {}

  ngOnInit(): void {
    this.chart = document.getElementById('chart')

this.myChart = new Chart(this.chart, {
  type: 'line',
    data: {
      labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'],
      datasets: this.data.chartdata(),
    }
    })
    
  } 

}
