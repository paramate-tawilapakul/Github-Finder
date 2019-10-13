import React, { Component } from 'react';
import axios from 'axios';
import Search from '../users/Search';
import Users from '../users/Users';
import Alert from '../layout/Alert';

export class Home extends Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null
  };

  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   this.setState({ users: res.data, loading: false });
  // }

  searchUsers = async text => {
    this.setState({ loading: true, alert: null });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  clearUsers = () => this.setState({ users: [], loading: false });

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 2000);
  };

  render() {
    const { users, loading } = this.state;
    return (
      <>
        <Alert alert={this.state.alert} />
        <Search
          searchUsers={this.searchUsers}
          clearUsers={this.clearUsers}
          showClear={users.length > 0}
          setAlert={this.setAlert}
        />
        <Users loading={loading} users={users} />
      </>
    );
  }
}

export default Home;
