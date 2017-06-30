import React from 'react';

class GridView extends React.Component {
  format(amount) {
    return Math.abs(Number(amount)) >= 1.0e9
      ? Math.abs(Number(amount)) / 1.0e9 + 'B'
      : Math.abs(Number(amount)) >= 1.0e6 ? Math.abs(Number(amount)) / 1.0e6 + 'M' : Math.abs(Number(amount)) >= 1.0e3;
  }

  render() {
    return (
      <section className={(this.props.showGrid ? 'show' : 'hide') + ' container'}>
        <h3>Revenue Report, {this.props.year}, Database</h3>
        <div className="body gridView">
          <table>
            <thead>
              <tr><th>Year</th><th>Product</th><th>Country</th><th>Revenue</th></tr>
            </thead>
            <tbody>
              {this.props.data.map((row, k) => (
                <tr key={k}>
                  <td>{row.year}</td><td>{row.product}</td><td>{row.country}</td><td>${this.format(row.revenue)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}

export default GridView;
