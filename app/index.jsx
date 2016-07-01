/*  Load React Libraries
******************************************/
import React from "react";
import ReactDOM from "react-dom";


/*  Include CSS
******************************************/
import Styles from "./assets/scss/main";


/*  Load Components
******************************************/
import Footer from "./components/footer";


/*  Load Assets
******************************************/   
import companyLogo from './assets/img/element-theory.svg';


/*  Start Building!
******************************************/
class Layout extends React.Component {
  constructor(){
    super();
    this.state = {
      companyName: "Element Theory"
    };
  }

  render() {

    return (
      <div>
        <div className="container">
          <div className="logo">
            <div className="logo-image">
              <img className="svg" src={ companyLogo } />
            </div>
            <h1><span>Reactivate</span> by { this.state.companyName }</h1>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout />, app);