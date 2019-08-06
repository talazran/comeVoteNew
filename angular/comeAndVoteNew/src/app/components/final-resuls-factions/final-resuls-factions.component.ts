import { Component, OnInit } from '@angular/core';
import { ManagersService } from 'src/app/services/managers.service';

@Component({
  selector: 'app-final-resuls-factions',
  templateUrl: './final-resuls-factions.component.html',
  styleUrls: ['./final-resuls-factions.component.scss']
})
export class FinalResulsFactionsComponent implements OnInit {

  constructor(private manage: ManagersService) {
   
  }

  ngOnInit() {
    this.manage.getAllFaction().subscribe((data) => {
      debugger;
      this.inityArrOfCity(data);
    });
  }
  inityArrOfCity(data){
    if (data != null) {//במידה והערים לא יחזרו עדיין מהשרת שלא ירוץ על ריק
         this.barChart = [ ];

       for (let index = 0; index < 10; index++) {//עובר על כול רשימת הערים
         const factions = data[index];//שומר במשתנה את העיר הנוכחית
         let value = (factions.voters )  //חישוב מנדטים
         this.barChart.push({ name: factions.fanctionsStageName, value: value });
       }
     }
  }


  view = [600,600];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  legendTitle = '';
  legendPosition = 'right';
  showXAxisLabel = true;
  xAxisLabel = 'מפלגה';
  showYAxisLabel = true;
  yAxisLabel = 'מצביעים';
  showGridLines = false;
  innerPadding = '10%';
  animations: boolean = true;
  barChart: any[] = barChart;
  lineChartSeries: any[] = lineChartSeries;
  lineChartScheme = {
    name: 'coolthree',
    selectable: true,
    group: 'Ordinal',
    domain: [ '#a8385d', '#00bfa5']
  };

  comboBarScheme = {
    name: 'singleLightBlue',
    selectable: true,
    group: 'Ordinal',
    domain: ['#01579b']
  };

  showRightYAxisLabel: boolean = true;
  yAxisLabelRight: string = 'Utilization';
}

export let lineChartSeries = [
  {
    name: 'Tablets',
    series: [
      
      {
        name: 'ddd',
        value: 0
      },
        {
          value: 0,
          name: 'aaa'
        },
        {
          value: 0,
          name: 'ss'
        },
        {
          value: 0,
          name: 'yoni'
        },
      
        {
          name: 'ddd',
          value: 0
        },
          {
            value: 0,
            name: 'aaa'
          },
          {
            value: 0,
            name: 'ss'
          },
          {
            value: 0,
            name: 'yoni'
          },
      
          {
            name: 'ddd',
            value: 0
          },
            {
              value: 0,
              name: 'aaa'
            },
            {
              value: 0,
              name: 'ss'
            },
            {
              value: 0,
              name: 'yoni'
            },
            {
              name: 'ddd',
              value: 0
            },
              {
                value: 0,
                name: 'aaa'
              },
              {
                value: 0,
                name: 'ss'
              },
              {
                value: 30,
                name: 'yoni'
              },
            
              {
                name: 'ddd',
                value: 3
              },
                {
                  value: 5,
                  name: 'aaa'
                },
                {
                  value: 12,
                  name: 'ss'
                },
                {
                  value: 30,
                  name: 'yoni'
                },
            
                {
                  name: 'ddd',
                  value: 3
                },
                  {
                    value: 5,
                    name: 'aaa'
                  },
                  {
                    value: 12,
                    name: 'ss'
                  },
                  {
                    value: 30,
                    name: 'yoni'
                  }
    ]
  }
];

export let barChart: any = [
  {
    name: 'ddd',
    value: 1
  },
  {
    name: 'aaa',
    value: 100
  },
  {
    name: 'ss',
    value: 2000
  },
  {
    name: 'yoni',
    value: 300
  },
  {
    name: 'ddd',
    value: 1
  },
  {
    name: 'aaa',
    value: 100
  },
  {
    name: 'ss',
    value: 2000
  },
  {
    name: 'yoni',
    value: 300
  },
  {
    name: 'ddd',
    value: 1
  },
  {
    name: 'aaa',
    value: 100
  },
  {
    name: 'ss',
    value: 2000
  },
  {
    name: 'yoni',
    value: 300
  },
  {
    name: 'ddd',
    value: 1
  },
  {
    name: 'aaa',
    value: 100
  },
  {
    name: 'ss',
    value: 2000
  },
  {
    name: 'yoni',
    value: 300
  },
  {
    name: 'ddd',
    value: 1
  },
  {
    name: 'aaa',
    value: 100
  },
  {
    name: 'ss',
    value: 2000
  },
  {
    name: 'yoni',
    value: 300
  },
  {
    name: 'ddd',
    value: 1
  },
  {
    name: 'aaa',
    value: 100
  },
  {
    name: 'ss',
    value: 2000
  },
  {
    name: 'yoni',
    value: 300
  }
];






