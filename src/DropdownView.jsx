import React from 'react';

class DropdownView extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.props.onChange(evt.target.value);
  }

  render() {
    return (
      <section className="container">
        <div className="body">
          <div className="input">
            <label htmlFor="yearDd">Fiscal Year</label>
            <select id="yearDd" onChange={this.handleChange}>
              <option value="All">All</option>
              {this.props.data.map((year, k) => <option key={k} value={year}>{year}</option>)}
            </select>
          </div>
        </div>
      </section>
    );
  }
}

export default DropdownView;
