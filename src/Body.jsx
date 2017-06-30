import React from 'react';
import { connect } from 'react-redux';
import { orderBy } from 'lodash';

import { getAPIData, selectFiscalYear, viewGridByProduct } from './actionCreators';

import DropdownView from './DropdownView';
import ChartView from './ChartView';
import GridView from './GridView';

class Body extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  filterData(data) {
    let sorted = orderBy(data, ['year', 'product', 'country'], ['asc', 'asc', 'asc']);
    let output = {
      year: [],
      chart: {},
      grid: []
    };
    let index = 0;
    for (let x = 0; x < sorted.length; x++) {
      if (output.year.indexOf(sorted[x].year) == -1) {
        output.year.push(sorted[x].year);
      }
      if (this.props.year == sorted[x].year || this.props.year == 'All') {
        if (output.chart[sorted[x].product] == undefined) {
          output.chart[sorted[x].product] = parseInt(sorted[x].revenue);
        } else {
          output.chart[sorted[x].product] += parseInt(sorted[x].revenue);
        }
        if (this.props.product == sorted[x].product) {
          if (!output.grid.length) {
            output.grid.push(Object.assign({}, sorted[x]));
          } else if (
            output.grid[index].year == sorted[x].year &&
            output.grid[index].product == sorted[x].product &&
            output.grid[index].country == sorted[x].country
          ) {
            output.grid[index].revenue += parseInt(sorted[x].revenue);
          } else {
            output.grid.push(Object.assign({}, sorted[x]));
            index++;
          }
        }
      }
    }
    return output;
  }

  render() {
    let data = this.filterData(this.props.data);
    return (
      <div id="body">
        <DropdownView onChange={this.props.setYear} data={data.year} />
        <ChartView data={data.chart} year={this.props.year} viewGrid={this.props.viewGrid} />
        <GridView data={data.grid} year={this.props.year} showGrid={this.props.product ? true : false} />
      </div>
    );
  }
}

Body.defaultProps = {
  data: [],
  year: 'All'
};

const mapStatetoProps = (state, ownProps) => {
  return {
    data: state.apiData.data,
    year: state.fiscalYear.year,
    product: state.viewProduct.product
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getData() {
    dispatch(getAPIData());
  },

  setYear(year) {
    dispatch(selectFiscalYear(year));
  },

  viewGrid(product) {
    dispatch(viewGridByProduct(product));
  }
});

export default connect(mapStatetoProps, mapDispatchToProps)(Body);
