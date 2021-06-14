function f() {
console.log("lsdaskjdklajfkl")
}
function f1(item) {

    console.log(item)
}
export default function (H) {
    H.setOptions(
        {
        lang: {
            months: ['فروردين', 'ارديبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
            shortMonths: ['فروردين', 'ارديبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
            weekdays: ["یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه", "شنبه"],
            rangeSelectorFrom: "از",
            rangeSelectorTo: "تا",
            rangeSelectorZoom: "بازه",
            resetZoom: "زوم مجدد",
            decimalPoint: '\u066B',
            thousandsSeparator: '\u066C',

        },
            chart: {
                type: 'candlestick',
                zoomType: 'x'
            },


            // scrollbar: {
            //     liveRedraw: false
            // },
            //
            // title: {
            //     text: 'AAPL history by the minute from 1998 to 2011'
            // },
            //
            // subtitle: {
            //     text: 'Displaying 1.7 million data points in Highcharts Stock by async server loading'
            // },

            // rangeSelector: {
            //     buttons: [{
            //         type: 'hour',
            //         count: 1,
            //         text: '1h'
            //     }, {
            //         type: 'day',
            //         count: 1,
            //         text: '1d'
            //     }, {
            //         type: 'month',
            //         count: 1,
            //         text: '1m'
            //     }, {
            //         type: 'year',
            //         count: 1,
            //         text: '1y'
            //     }, {
            //         type: 'all',
            //         text: 'All'
            //     }],
            //     inputEnabled: false, // it supports only days
            //     selected: 4 // all
            // },

            xAxis: {
                events: {
                    afterSetExtremes: f1
                },
                // minRange: 3600 * 1000 // one hour
            },
        //
        //     yAxis: {
        //         floor: 0
        //     },
        //
        // rangeSelector: {
        //     buttons: [{
        //         type: 'month',
        //         count: 1,
        //         text: '1m',
        //
        //     }, {
        //         type: 'month',
        //         count: 3,
        //         text: '3m'
        //     }, {
        //         type: 'month',
        //         count: 6,
        //         text: '6m'
        //     }, {
        //         type: 'ytd',
        //         text: 'YTD'
        //     }, {
        //         type: 'year',
        //         count: 1,
        //         text: '1y'
        //     }, {
        //         type: 'all',
        //         text: 'All'
        //     }]
        // },


    });
}
