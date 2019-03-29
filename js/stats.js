$( document ).ready( function() {

    //overall volume
    Highcharts.setOptions({
        lang: {
            thousandsSep: ",",
            decimalPoint: '.'
        }
    });

    //volume chart
    var volumeChart = Highcharts.chart( 'volume-container', {
          chart: {
              type: 'line'
          },
          title: {
              text: ''
          },
          xAxis: {
              categories: ["04/2016","05/2016","06/2016","07/2016","08/2016","09/2016","10/2016","11/2016","12/2016","01/2017","02/2017","03/2017","04/2017","05/2017","06/2017","07/2017","08/2017","09/2017","10/2017","11/2017","12/2017","01/2018","02/2018","03/2018","04/2018","05/2018","06/2018","07/2018","08/2018","09/2018","10/2018","11/2018","12/2018","01/2019","02/2019"]
          },
          yAxis: [{ //--- Primary yAxis
              title: {
                  text: 'USD'
              }
          }, { //--- Secondary yAxis
              title: {
                  text: 'BTC'
              },
              opposite: true
          }],
          plotOptions: {
              line: {
                  marker: {
                      enabled: false
                  }
              }
          },
          series: [{
              yAxis: 0,
              name: 'USD',
              color: '#000',
              tooltip: {
                  pointFormat: '{point.y:,.0f} USD<br>'
              },
              data: [13792.27157,39004.41862,34747.10333,33664.25475,149112.1901,72826.8349,80373.7636,133111.5085,147766.9444,223908.8823,142296.5827,196890.8353,238489.7743,410331.0229,716650.0242,209568.3684,536809.9232,440571.7911,393269.1143,520430.1413,3041714.944,1245149.433,634527.5756,713308.1799,545125.1617,586420.8052,675849.95,498015.4563,2427576.136,2111553.753,7095065.072,6615781.172,5858861.337,3421269.52,2402016.115]
          },{
              yAxis: 1,
              name: 'BTC',
              color: '#25B135',
              tooltip: {
                  pointFormat: '{point.y:,.2f} BTC<br>'
              },
              data: [30.4614,85.1692,55.6743,50.6044,256.7352,121.5743,128.2444,184.0622,182.4798,243.2483,134.3275,172.3857,193.37,221.4358,270.4825,83.472,135.1765,106.9736,74.9017,67.2054,181.0099,93.5597,70.1503,78.5016,68.451,68.6165,99.8987,69.0223,357.2422,324.9354,1106.7487,1356.0337,1602.5863,933.8959,654.9728]
          }]
      });



      //bsq supply chart
      var bsqChart = Highcharts.chart( 'bsq-container', {
        chart: {
            type: 'line'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ["10/2017","11/2017","12/2017","01/2018","02/2018","03/2018","04/2018","05/2018","06/2018","07/2018","08/2018","09/2018","10/2018","11/2018","12/2018","01/2019","02/2019"]
        },
        yAxis: [{
            title: {
                text: 'BSQ'
            }
        }],
        series: [{
            yAxis: 0,
            name: 'BSQ',
            color: '#000',
            tooltip: {
                pointFormat: '{point.y:,.0f} BSQ<br>'
            },
            data: [2548500,2620250,2671850,2722950,2769150,2806330,2830832,2868164,2889799,2934231,2971823,3018665,3052400,3272927,3344765,3406635,3520705]
        }],
    });

});