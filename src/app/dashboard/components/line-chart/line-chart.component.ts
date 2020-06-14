import {Component, Input} from '@angular/core';
import {ChartDataSets, ChartOptions} from 'chart.js';
import {Color, Label} from 'ng2-charts';
import {TickData} from '../../model/dashboard.model';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent {
  @Input() set chartLabels(labels: string[]) {
    if (labels && labels.length > 0) {
      this.lineChartLabels = labels as Label[];
    }
  }
  @Input() set chartData(ticks: TickData[]) {
    if (ticks && ticks.length > 0) {
      this.lineChartData = ticks as ChartDataSets[];
    }
  }
  @Input() colors: string[];

  public lineChartLabels: Label[] = [];

  public lineChartData: ChartDataSets[] = [];

  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    spanGaps: true,
    tension: 0
  } as any;

  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor() { }
}
