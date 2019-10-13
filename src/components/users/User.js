import React, { Component } from 'react';
import PropTypes from 'prop-types';

class User extends Component {
  componentDidMount() {
    this.props.clearUser();
    this.props.getUser(this.props.match.params.login);
  }

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable
    } = this.props.user;
    const { loading } = this.props;
    return <div>{name}</div>;
  }
}

User.propTypes = {
  getUser: PropTypes.func.isRequired,
  clearUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

export default User;
