import React from "react";

class Repo extends React.Component {
  render() {
    const {
      repoName,
      repoDescription,
      numberOfStars,
      numberOfIssues,
      ownerUsername,
      ownerAvatar,
      date
    } = this.props;
    return (
      <div className="container">
        <div className="img">
          <img src={ownerAvatar} alt={ownerUsername} />
        </div>

        <div className="reponame">
          <h1>{repoName}</h1>
        </div>

        <div className="repodescription">
          <h4>{repoDescription}</h4>
        </div>

        <div className="stars">
          <h3> Stars: {numberOfStars}</h3>
        </div>

        <div className="issues">
          <h3>Issues: {numberOfIssues}</h3>
        </div>

        <div className="subby">
          <h3>
            Submitted 30 days ago (relative to {date}) by {ownerUsername}
          </h3>
        </div>
      </div>
    );
  }
}

export default Repo;
