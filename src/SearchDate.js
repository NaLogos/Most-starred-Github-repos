import React from "react";

class SearchDate extends React.Component {
  render() {
    return (
      <div className="search-box">
        <form onSubmit={this.props.search()}>
          <label htmlFor="date">
            Show me the most starred Github repos created in the last 30 days
            relative to (ex:2017-01-22)
            <input
              onChange={event => this.props.dateChange(event.target.value)}
              id="date"
              value={this.props.date}
              placeholder="Enter date ..."
            />
          </label>

          <button>SEARCH</button>
        </form>
      </div>
    );
  }
}

export default SearchDate;
