import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
         <Header header={this.state.myText}/>
           <Content content={this.state.contentText}/>
           <Clock />
      </div>
    );
  }
}
App.defaultProps={
  header:"this is default header",
  content:"this is default content"
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
 {/*in react jsx classes are to be started with upeercase
  if else dont work in jsx*/}
class Content extends Component{
  constructor(props){
    super(props);
    this.state={
      data: [],
      count:0,
    };
    this.updateMyState=this.updateMyState.bind(this);{/*important, use it to bind 'this'to a function and use only in constructor*/ }
    this.forceUpdateRandomNumber=this.forceUpdateRandomNumber.bind(this);
    this.findMyDOMNode=this.findMyDOMNode.bind(this);
  }
  updateMyState(){
    var count=this.state.count;
    count++;
    var item="click ="+ count;
    var myArr=this.state.data;
    myArr.push(item);
    this.setState({data:myArr,count:count});{/*used to update or set state*/}
  }
  forceUpdateRandomNumber(){
    this.forceUpdate();{/*used to force update any state*/}
  }
  findMyDOMNode(){
    var myDiv=document.getElementById('myDiv');
    ReactDOM.findDOMNode(myDiv).style.color="red";{/*used to find any dom node and update them*/}
  }
  render() {
    return(
      <div>
        <div className="App-intro">
         <h1 >Components API</h1>
          <p>I am creating components now</p>

          </div>
          <button onClick={this.updateMyState}>CLICK ME</button>
          <h4>State data:{this.state.data}</h4>
          <button onClick={this.forceUpdateRandomNumber}>Random number</button>
          <h4>{Math.random()}</h4>
            <button onClick={this.findMyDOMNode}>Find my DOM node</button>
            <div id="myDiv">This is my div</div>
          {/*<div>
          <h4>Array:{this.props.propArray}</h4>
          <h4>Bool:{this.props.propBoolean ? "True":"false"}</h4>
          <h4>func:{this.props.propFunction(6)}</h4>
          <h4>number:{this.props.propNumber}</h4>
          <h4>string:{this.props.propString}</h4>
          <h4>object:{this.props.propObject.objectname1}</h4>
          <h4>object:{this.props.propObject.objectname2}</h4>
          <h4>object:{this.props.propObject.objectname3}</h4>
          </div>*/}
          </div>




    );

  }
}                    {/*remember this:React.PropTypes.datatypes*/}
{/*Content.propTypes={
  propArray:React.PropTypes.array.isRequired,
  propBoolean:React.PropTypes.bool.isRequired,
  propFunction:React.PropTypes.func,
  propNumber:React.PropTypes.number,
  propString:React.PropTypes.string,
  propObject:React.PropTypes.object
}
Content.defaultProps={
  propArray:[1,2,3,4],
  propBoolean:true,
  propFunction:function(e){return e},
  propNumber:69,
  propString:"whoaa",
  propObject:{
    objectname1:"ob1",
    objectname2:"ob1",
    objectname3:"ob1"
  }
}*/}

         

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
      <p>the time is:{this.state.date.toLocaleTimeString()}</p>
      <p>{this.state.comment}</p>
      </div>



    );

  }
}

export default App;
