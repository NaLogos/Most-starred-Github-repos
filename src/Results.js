import React from "react";
import Repo from "./Repo";

class Results extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      loading: true,
      showPrompt: true,
      date: ""
    };

    this.promptToggle = this.promptToggle.bind(this);
  }

  promptToggle() {
    this.setState({ showPrompt: !this.state.showPrompt });
  }
  componentDidMount() {
    if (this.state.showPrompt) {
      var date = prompt(
        "Show me the most starred Github repos created in the last 30 days relative to (ex:2017-01-22)",
        "2017-01-22"
      );

      this.promptToggle;
    }

    fetch(
      "https://api.github.com/search/repositories?q=created:>" +
        date +
        "&sort=stars&order=desc"
    )
      .then(res => res.json())
      .then(json => {
        let items;
        if (json.items) {
          if (Array.isArray(json.items)) {
            items = json.items;
          } else {
            items = [json.items];
          }
        } else {
          items = [];
        }

        this.setState({
          loading: false,
          items,
          date
        });
      });
  }

  render() {
    console.log(this.state.loading);
    console.log(this.state.items);
    return (
      <div>
        <div>
          {this.state.items.map(repo => {
            return (
              <React.Fragment key={Math.random()}>
                <Repo
                  key={repo.id}
                  repoName={repo.name}
                  repoDescription={repo.description}
                  numberOfStars={repo.stargazers_count}
                  numberOfIssues={repo.open_issues_count}
                  ownerUsername={repo.owner.login}
                  ownerAvatar={repo.owner.avatar_url}
                  date={this.state.date}
                />
                <hr key={Math.random()} />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Results;
