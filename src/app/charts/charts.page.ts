import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import data from '../../assets/mock.json';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.page.html',
  styleUrls: ['./charts.page.scss'],
})
export class ChartsPage implements AfterViewInit {

  @ViewChild('barCanvas') private barCanvas: ElementRef;
  @ViewChild('lineCanvas') private lineCanvas: ElementRef;

  private mock = data;
  ischart = false;

  barChart: any;
  doughnutChart: any;
  lineChart: any;
  date: string[] = [];
  impressions: number[] = [];
  clicks: number[] = [];
  installs: number[] = [];
  dau: number[] = [];
  revenue: number[] = [];
  platform: string[] = [];
  app: string[] = [];

  constructor() {
    console.log(this.mock);
  }

  ngAfterViewInit() {
    this.mock.forEach(x => {
      this.date.push(x.date);
      this.impressions.push(x.impressions);
      this.clicks.push(x.clicks);
      this.installs.push(x.installs);
      this.dau.push(x.dau);
      this.revenue.push(x.revenue);
      this.platform.push(x.platform);
      this.app.push(x.app);
    });
    this.barChartMethod();
    this.lineChartMethod();
  }
  chart(value: string){
    if(value === 'true'){
      this.ischart = false;
    }else{
      this.ischart = true;
    }
  }
  barChartMethod() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: this.date,
        datasets: [{
          label: '# of Impressions',
          data: this.impressions,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
  lineChartMethod() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: this.date,
        datasets: [
          {
            label: 'Impressions per date',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: this.impressions,
            spanGaps: false,
          }
        ]
      }
    });
  }

}
