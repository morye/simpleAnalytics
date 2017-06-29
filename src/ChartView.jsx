import React from 'react';

import ReactHighCharts from 'react-highcharts';

class ChartView extends React.Component {
  render() {
	let { viewGrid } = this.props;
	const config = {
	  chart: {
		plotBackgroundColor: null,
		plotBorderWidth: null,
		plotShadow: false,
		type: 'pie'
	  },
	  title: {
		text: ''
	  },
	  tooltip: {
		pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
	  },
	  plotOptions: {
		pie: {
		  allowPointSelect: true,
		  cursor: 'pointer',
		  dataLabels: {
			enabled: false
		  },
		  showInLegend: true
		},
		series: {
			events: {
				click: function(evt) {
					viewGrid (evt.point.name);
				}
			}
		}
	  },
	  series: [
		{
		  name: 'Brands',
		  colorByPoint: true,
		  data: []
		}
	  ]
	};
    let list = [];
    if (this.props.data) {
      for (let item in this.props.data) {
        list.push({ name: item, y: this.props.data[item] });
      }
      if (list.length) config.series[0].data = list;
    }
    return (
      <section className="container">
        <h3>Revenue by Product, {this.props.year}</h3>
        <div className="body chartView">
          <ReactHighCharts config={config} />
        </div>
      </section>
    );
  }
}

export default ChartView;
