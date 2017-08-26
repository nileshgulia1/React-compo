import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      myText:"Welcome to react",
      contentText:"this is react"
    };
  }
  render() {

    return (
      <div className="App">
      {/*<h1>{this.state.myText}</h1>
      <p>{this.state.contentText}</p>*/}
         <Header />
           <Content />
           <Clock />
      </div>
    );
  }
}
class Header extends Component{
  render() {
    return(
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>

    );

  }
}
class Content extends Component{
  render() {
    return(
      <p className="App-intro">
      <h1 >Hello this is my app</h1>
        Iam creating components now
      </p>


    );

  }
}
class Clock extends Component{
  constructor(props){
    super(props);
    this.state={date:new Date(),comment:"hello"}
  }
  componentDidMount(){
    this.timeID=setInterval(()=>this.tick(),1000);
  }
    tick() {
    this.setState({
      date:new Date(),
      comment:this.state.comment
    });
  }
  render() {
    return(
      <div>
      <p>the time is{this.state.date.toLocaleTimeString()}</p>
      <p>{this.state.comment}</p>
      </div>



    );

  }
}

export default App;
