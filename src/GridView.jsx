import React from 'react';

class GridView extends React.Component {
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
                <tr key={k}><td>{row.year}</td><td>{row.product}</td><td>{row.country}</td><td>{row.revenue}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}

export default GridView;
