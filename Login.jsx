import React, { Component } from "react";
import "./Login.css";
import { Redirect } from "react-router-dom";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogged: false,
      loginParams: {
        Firstname: "",
        Lastname:"",
        Email_id:"",
        Newpassword: "",
        Confirmpassword:""
      }
    };
  }
  handleFormChange = event => {
    let loginParamsNew = { ...this.state.loginParams };
    let val = event.target.value;
    loginParamsNew[event.target.name] = val;
    this.setState({
      loginParams: loginParamsNew
    });
  };

  login = event => {
    let Firstname = this.state.loginParams.Firstname;
    let Lastname = this.state.loginParams.Lastname;
    let Email_id = this.state.loginParams.Email_id;
    let Newpassword = this.state.loginParams.Newpassword;
    let Confirmpassword= this.state.loginParams.Confirmpassword;
    if ( Newpassword === Confirmpassword) {
      localStorage.setItem("token", "T");
      this.setState({
        islogged: true
      });
    }
    event.preventDefault();
  };
  render() {
    if (localStorage.getItem("token")) {
      return <Redirect to="/" />;
    }
    return (
      <div className="container">
        <form onSubmit={this.login} className="form-signin">
          <h1 className="h3 mb-3 font-weight-normal">Registration Form</h1>
          <div className="row">
            <div className="col">
              <input
                type="text"
                label="Firstname"
                onChange={this.handleFormChange}
                placeholder="Enter your Firstname"
              />
              <input
                type="text"
                label="LastName"
                onChange={this.handleFormChange}
                placeholder="Enter Your Lastname"
              />
              <input
                type="text"
                label="Email.Id"
                onChange={this.handleFormChange}
                placeholder="test@gamil.com"
              />
              <input
                type="password"
                label="New Password"
                onChange={this.handleFormChange}
                placeholder="Create New Password"
              />
              <input
                type="password"
                label="Confirm Password"
                onChange={this.handleFormChange}
                placeholder="Confirm Password"
              />

              <input type="submit" value="Submit" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default Login;
