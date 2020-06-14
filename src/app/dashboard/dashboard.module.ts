import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TickerComponent } from './components/ticker/ticker.component';
import { DashboardComponent } from './dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DashboardWidgetComponent } from './components/dashboard-widget/dashboard-widget.component';
import {MatCardModule} from '@angular/material/card';
import {ChartsModule} from 'ng2-charts';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [TickerComponent, DashboardComponent, DashboardWidgetComponent, LineChartComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    ChartsModule,
    MatDividerModule,
    MatListModule
  ]
})
export class DashboardModule { }
