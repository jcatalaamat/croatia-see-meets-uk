import React, { Component } from 'react';

class MenuBccc extends Component {
  goToMission = () => {
    this.props.goToMission();
    this.props.close();
  }

  goToHistory = () => {
    this.props.goToHistory();
    this.props.close();
  }

  goToCurrent = () => {
    this.props.goToCurrent();
    this.props.close();
  }

  goToDirectors = () => {
    this.props.goToDirectors();
    this.props.close();
  }

  render() {
    return (
      <div className="menu">
        <div className="logo-bccc" />
        <ul>
          <li className="menu-i" onClick={this.goToMission}>Our Mission</li>
          <li className="menu-i" onClick={this.goToHistory}>Our History</li>
          <li className="menu-i" onClick={this.goToCurrent}>Current Events</li>
          <li className="menu-f" onClick={this.goToDirectors}>Board of Directors</li>
        </ul>
      </div>
    );
  }
}

export default MenuBccc;
