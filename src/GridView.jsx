import React from 'react';

class GridView extends React.Component {
  format(amount) {
	return Math.abs(Number(amount)) >= 1.0e+9 ? Math.abs(Number(amount)) / 1.0e+9 + "B"
		: Math.abs(Number(amount)) >= 1.0e+6 ? Math.abs(Number(amount)) / 1.0e+6 + "M"
		: Math.abs(Number(amount)) >= 1.0e+3;
  }
  
  render() {
    return (
      <section className="container">
        <h3>Revenue Report, {this.props.year}, Database</h3>
        <div className="body gridView">
          <table>
            <thead>
              <tr><th>Year</th><th>Product</th><th>Country</th><th>Revenue</th></tr>
            </thead>
            <tbody>
              {this.props.data.map((row, k) => (
                <tr key={k}><td>{row.year}</td><td>{row.product}</td><td>{row.country}</td><td>${this.format(row.revenue)}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}

export default GridView;
