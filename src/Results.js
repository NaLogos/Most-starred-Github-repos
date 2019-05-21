import React from "react";
import Repo from "./Repo";

class Results extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      loading: true,
      page: 1,
      date: "",
      scrolling: false,
      totalPages: 34
    };
    this.state.date = prompt(
      "Show me the most starred Github repos created in the last 30 days relative to (ex:2017-01-22)",
      "2017-01-22"
    );
  }

  search() {
    const url = `https://api.github.com/search/repositories?q=created:>${
      this.state.date
    }&sort=stars&order=desc${this.state.page}`;

    fetch(url)
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
          items: [...this.state.items, ...items],
          scrolling: false
        });
      });
  }

  componentDidMount() {
    this.search();
    this.scrollListener = window.addEventListener("scroll", e => {
      this.handleScroll(e);
    });
  }

  loadMore() {
    this.setState(
      prevState => ({
        page: prevState.page + 1,
        scrolling: true
      }),
      this.search()
    );
  }

  handleScroll() {
    const { scrolling, totalPages, page } = this.state;
    if (scrolling) return;
    if (totalPages <= page) return;
    const lastRepo = document.querySelector("ul.repos > li:last-child");
    const lastRepoOffset = lastRepo.offsetTop + lastRepo.clientHeight;
    const pageOffset = window.pageYOffset + window.innerHeight;
    var bottomOffset = 50;
    if (pageOffset > lastRepoOffset - bottomOffset) {
      this.loadMore();
    }
  }

  render() {
    if (this.state.loading) {
      return <h1 className="loading">LOADING....</h1>;
    }

    return (
      <div>
        <ul className="repos">
          {this.state.items.map(repo => {
            return (
              <React.Fragment key={Math.random()}>
                <li key={repo.id}>
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
                </li>
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Results;
