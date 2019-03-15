import React, { Component } from 'react';

class Menu extends Component {
  goToEvent = () => {
    this.props.goToEvent();
    this.props.close();
  }

  goToWhy = () => {
    this.props.goToWhy();
    this.props.close();
  }

  goToAgenda = () => {
    this.props.goToAgenda();
    this.props.close();
  }

  goToProgramme = () => {
    this.props.goToProgramme();
    this.props.close();
  }

  goToApply = () => {
    this.props.goToApply();
    this.props.close();
  }

  goToBccc = () => {
    this.props.goToBccc();
    this.props.close();
  }


  render() {
    return (
      <div className="menu">
        <div className="logo" />
        <ul>
          <li className="menu-i" onClick={this.goToEvent}>The Event</li>
          <li className="menu-i" onClick={this.goToWhy}>Why Participate</li>
          <li className="menu-i" onClick={this.goToAgenda}>Agenda</li>
          {/* <li className="menu-i" onClick={this.goToProgramme}>Encode Programme</li> */}
          <li className="menu-i" onClick={this.goToApply}>How to apply</li>
          <li className="menu-f" onClick={this.goToBccc}>About BCCC</li>
        </ul>
      </div>
    );
  }
}

export default Menu;
