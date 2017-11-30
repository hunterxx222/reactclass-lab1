import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import InstaList from './InstaList';
import InstaContainer from './InstaContainer.js';

class App extends Component {
constructor(props){
  super(props);
  this.state = {
  //  posts: [
  //    {
  //       id: 1,
  //       image: "https://instagram.fsgn4-1.fna.fbcdn.net/t51.2885-15/e35/23594930_126440671464105_1598861271686447104_n.jpg",
  //       caption: "#Fall #celebrations at #home, as we are giving thanks to friends, family, and work accomplishments- and an #abundant life.",
  //       likes: 25
  //    },
  //    {
  //       id: 2,
  //       image: "https://img.purch.com/h/1000/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA2NS8xNDkvb3JpZ2luYWwvYmFuYW5hcy5qcGc=",
  //       caption: "Best fruit in the world",
  //       likes: 12
  //    },
  //   {
  //       id: 3,
  //       image: "http://i0.kym-cdn.com/entries/icons/mobile/000/011/365/GRUMPYCAT.jpg",
  //       caption: "Smiling cat",
  //       likes: 244
  //    }
  //  ]
  }
}
componentWillMount() {
  const key = "7591698.b46c5cd.3090394611424e36befc1fe94b517459";
  console.log('mounted');
  const existingToken = sessionStorage.getItem(key);
  console.log(existingToken);
  const accessToken = window.location.hash.split('=')[1];
  console.log(accessToken);

  const oauthUrl = "https://www.instagram.com/oauth/authorize/?client_id=b46c5cd883584d1db9c9187d63afbf8e&redirect_uri=http://localhost:3000&response_type=token";
  if(!accessToken && !existingToken){
    window.location.replace(oauthUrl);
  }

  if(accessToken){
    sessionStorage.setItem(key, accessToken);
    this.setState({
      token: accessToken
    });
  }

  if(existingToken){
    this.setState({
      token: existingToken
    });
  }

}

  render() {
  
  const toggleTitle = () => {
    const newState = this.state.title ? null : "Toggle Title";
    this.setState({ title: newState });
  }
    console.log("App.render");
    return <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            {this.state.title || this.props.title}
          </h1>
          <a href="#" onClick={toggleTitle}>
            <img src={logo} className="App-logo" alt="logo" />
          </a>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <InstaContainer token={this.state.token} />
      </div>;
  }
}

export default App;
