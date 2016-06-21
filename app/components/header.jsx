import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <h1>{this.props.companyName}</h1>
    )
  }
}

Header.propTypes = {
  companyName: React.PropTypes.string
};