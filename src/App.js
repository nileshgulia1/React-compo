import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headerText: "Welcome to React!",
      contentText: "In this lecture, we will go over the Components Life Cycle methods"
    };
  }
  render() {
    return (
      <div className="App">
        {
          /*
          <h1>{this.state.headerText}</h1>
          <p>{this.state.contentText}</p>
          */
        }
        <Header />
        <Content />
      <EsaayComponent />
        <FormFlavor />
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
    );
  }
}

class Content extends Component {
  constructor(props){
    super(props);
    this.state={
      myInputValue: "my Input"
    };
    this.myInputChanged=this.myInputChanged.bind(this);
  }
myInputChanged(e){

  var itemValue=e.target.value;
  this.setState({
    myInputValue:itemValue
  });
}
  render() {
    return (
      <div className="App-intro">
        <h1>Forms in React!</h1>
        <p>In this lecture, we will go over the Forms!!</p>
        <MyInputComponent inputValue={this.state.myInputValue}
        myInputChanged={this.myInputChanged}/>
        <h4>{this.state.myInputValue}</h4>


      </div>
    );
  }
}
class MyInputComponent extends Component{
  render(){
    return(
      <div>
      <input  placeholder={this.props.inputValue} onChange={this.props.myInputChanged}></input>


      </div>





    );
  }
}
class EsaayComponent extends Component{
  constructor(props){
    super(props);
    this.state={
      value: 'Once upon a time'
    };
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleChange(e){
    this.setState({value: e.target.value});
  }
  handleSubmit(e){
    alert(this.state.value);
    e.preventDefault();
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
      <textarea placeholder={this.state.value} onChange={this.handleChange} />
      <h4>{this.state.value}</h4>
      <button type="submit">Submit</button>

      </form>

    );
  }
}
class FormFlavor extends Component{
  constructor(props){
    super(props);
    this.state={
      value: 'myfruit'
    };
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleChange(e){
    this.setState({value: e.target.value});{/*for updation of value(state)*/}
  }
  handleSubmit(e){
    alert("The Flavour you selected is " + this.state.value.toUpperCase());
    e.preventDefault();
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
      <label>
      Pick your favourite fruit:
      <select onChange={this.handleChange}>
      <option value="select">Select</option>
      <option value="grapefruit">grapes</option>
        <option value="banaanafruit">bannana</option>
          <option value="applefruit">apple</option>
            <option value="chikufruit">chiku</option>
            </select>





      </label>
      <button type="submit">Submit</button>

      </form>

    );
  }
}






export default App;
