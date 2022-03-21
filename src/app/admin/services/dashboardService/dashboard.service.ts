import { Injectable } from '@angular/core';
import { ChartService } from '../chartService/chart.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
datasets:any[] = []
  constructor(public data:ChartService) { }

  chartdata(){
    return this.datasets = this.data.data
}
}
