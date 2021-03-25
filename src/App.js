import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.changeColor = this.changeColor.bind(this);

    this.state = {favoritecolor: "red"};

  }
  myChangeHandler = (event) => {
    console.log(event)
    this.setState({username: event.target.value});
  }
  render() {
  return (
    <div className="App">
      <header >
      
       sdlfjjf
      </header>
      <input type="text"   name="username"      onChange={this.myChangeHandler} />
      <Header  brand={this.state.favoritecolor} onTitleChange={this.handleTitleChange}/>
      {this.state.favoritecolor}
      {this.state.username}
      <button onClick={this.changeColor2}>check</button>
    </div>
  );
  }
  changeColor () {
    // this.BRAND="black";
    this.setState({favoritecolor: "blue"});
  }

  handleTitleChange=(event)=>{
    console.log(event)
    this.setState({favoritecolor: "broen"});
  }

  changeColor2 = () => {
    this.setState({favoritecolor: "black"});

  }
}


class Header extends React.Component {
  constructor(props) {
    super(props);
    console.log("1");
    this.state = {favoritecolor: "red"};
  }
  static getDerivedStateFromProps(props, state) {
    console.log("2");
    return {favoritecolor: props.favcol };
  }
  render() {
    return (
      <h1 onClick={this.props.onTitleChange}> My Favorite Color is        {this.props.brand}
      </h1>

    )}   
}  

export default App;
