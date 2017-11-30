import React, { Component } from 'react'

export default class InstaPost extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <img src={this.props.images.standard_resolution.url}/>
        {/* <p>{this.props.caption.text}</p> */}
        <p>{this.props.likes.count} Likes</p>
      </div>

    )
  }
}
