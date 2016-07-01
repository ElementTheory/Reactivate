import React from "react";

export default class Footer extends React.Component {
  render() {

    const currentYear = new Date().getFullYear();

    return (
      <p>&copy; { currentYear } Element Theory. All rights reserved.</p>
    )
  }
}