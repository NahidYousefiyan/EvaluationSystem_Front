import React, {Component} from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official';
import HC_exporting from 'highcharts/modules/exporting'


HC_exporting(Highcharts)

export default class StockChartsForPPS extends Component {
    state = {
        data: {},
    }

    prepareForStockChart = (data) => {
        let xAxis = []
        let yAxis = []
        let yAxis2 = []

        data.map(m => {
            yAxis.push(m.sumGrade)
            xAxis.push(m.evaluationIndexeTitle)
            yAxis2.push(m.sumWeight)
        })

        return {xAxis, yAxis, yAxis2}
    }

    render() {
        let data = []

        const {xAxis, yAxis, yAxis2} = this.prepareForStockChart(this.props.data)
        const options = {

            chart: {
                zoomType: 'xy',
                style: {
                    fontFamily: 'yekan'
                }
            },
            title: {
                text: `میانگین 
                 ${this.props.name}
                 `,
                align: 'center'
            },
            // subtitle: {
            //     text: 'Source: WorldClimate.com',
            //     align: 'left'
            // },
            xAxis: [{
                categories: xAxis,
                crosshair: true
            }],
            yAxis: [{ // Primary yAxis
                labels: {
                    format: '{value}',
                    style: {
                        color: Highcharts.getOptions().colors[2]
                    }
                },
                title: {
                    text: '',
                    style: {
                        color: Highcharts.getOptions().colors[2]
                    }
                },
                opposite: true

            }, { // Secondary yAxis
                gridLineWidth: 0,
                title: {
                    text: ' مجموع امتیاز شاحص ',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                labels: {
                    format: '{value}',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                }

            }, { // Tertiary yAxis
                gridLineWidth: 0,
                title: {
                    // text: 'Sea-Level Pressure',
                    text: '',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },
                labels: {
                    format: '{value} ',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },
                opposite: true
            }],
          tooltip: {
                useHTML:true,
                formatter: function() {
                    // return this.series.name + '  <b>' + Highcharts.numberFormat(this.y, 0) + '</b><br/> ' + this.x;
                    return this.series.name + ' : <b>' + Highcharts.numberFormat(this.y, 0) + '</b><br/> ' ;
                }
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                x: 80,
                verticalAlign: 'top',
                y: 55,
                floating: true,
                backgroundColor:
                    Highcharts.defaultOptions.legend.backgroundColor || // theme
                    'rgba(255,255,255,0.25)'
            },
            series: [
                {
                name: 'شاخص دانشگاهی',
                type: 'column',
                // yAxis: 1,
                data: yAxis,
                tooltip: {
                    valueSuffix: ' '
                }

            },
                {
                    name: ' ایده آل',
                    type: 'spline',
                    // yAxis: 2,
                    data: yAxis2,
                    marker: {
                        enabled: false
                    },
                    dashStyle: 'shortdot',
                    tooltip: {
                        valueSuffix: ' '
                    }

                },
                //     {
                //     name: 'Temperature',
                //     type: 'spline',
                //     data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
                //     tooltip: {
                //         valueSuffix: ' °C'
                //     }
                // }
            ],
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 100,
                        maxHeight: 1000
                    },
                    chartOptions: {
                        legend: {
                            floating: false,
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom',
                            x: 0,
                            y: 0
                        },
                        yAxis: [{
                            labels: {
                                align: 'right',
                                x: 0,
                                y: -6
                            },
                            showLastLabel: false
                        }, {
                            labels: {
                                align: 'left',
                                x: 0,
                                y: -6
                            },
                            showLastLabel: false
                        }, {
                            visible: false
                        }]
                    }
                }]
            }


        }
        return (

            <React.Fragment>

                <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                />
            </React.Fragment>
        )
    }
}