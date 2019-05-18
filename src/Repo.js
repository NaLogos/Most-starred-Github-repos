import React from "react";

class Repo extends React.Component {
  render() {
    const {
      repoName,
      repoDescription,
      numberOfStars,
      numberOfIssues,
      ownerUsername,
      ownerAvatar
    } = this.props;
    return (
      <div>
        <div>
          <img src={ownerAvatar} alt={ownerUsername} />
        </div>

        <div>
          <h1>{repoName}</h1>
          <h2>
            {numberOfStars}-{numberOfIssues}-{ownerUsername}
          </h2>
          <p>{repoDescription}</p>
        </div>
      </div>
    );
  }
}

export default Repo;
