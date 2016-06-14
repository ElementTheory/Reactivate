import React from "react";

export class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.companyName}</h1>
      </div>
    )
  }
}

Header.defaultProps = {
  companyName: "Insert Logo Here"
};

Header.propTypes = {
  companyName: React.PropTypes.string
};

export default Header