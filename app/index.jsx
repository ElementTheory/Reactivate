/*  Load React Libraries
******************************************/
import React from "react";
import ReactDOM from "react-dom";


/*  Include CSS
******************************************/
import Styles from "./assets/scss/main";


/*  Load Components
******************************************/
import Header from "./components/header.jsx";

/*  Start Building!
******************************************/
class Layout extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      companyName: "Hello World!"
    }
  }

  render() {
    return (
      <div>
        <Header companyName={ this.state.companyName } />
      </div>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout />, app);