import React from "react";

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: true
    };
  }

  componentDidMount() {
    fetch(
      "https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc"
    )
      .then(res => res.json())
      .then(x => {
        this.setState({
          loading: false,
          items: x
        });
      });
  }

  render() {
    return <h3>whatever</h3>;
  }
}

export default Results;
