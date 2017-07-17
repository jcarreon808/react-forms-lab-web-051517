import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({
      username: event.target.value,
      password: event.target.value
    })
  }

  formSubmit = (event) => {
    event.preventDefault();
    const username = this.state.usersname;
    const password = this.state.password;
    if(!username || !password){
      return;
    }

    this.props.onSubmit({username,password})
  }

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" name="password" value={this.state.password}
            onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
