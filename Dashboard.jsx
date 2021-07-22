import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { withRouter } from "react-router";
import "./Dashboard.css";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogout: false
    };
  }
  signOut = () => {
    localStorage.removeItem("token");
    this.setState({
      islogout: true
    });
  };
  render() {
    if (this.state.islogout) {
      return <Redirect to="/login" />;
    }
    const { match } = this.props;
    return (
      <div>
        <ul>
          <li>
            <Link to={`${match.path}`}>Dashboard</Link>
          </li>
          
          <li className="push-right">
            <button onClick={this.signOut} href="#">
              Sign Out
            </button>
          </li>
        </ul>
          <div>
           <center>
               <h2>Your application is registered successfully .</h2>
           </center>
           </div>
          </div>
    );
  }
}

export default withRouter(Dashboard);
