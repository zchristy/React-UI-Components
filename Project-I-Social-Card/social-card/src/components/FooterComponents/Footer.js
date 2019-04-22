import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentCount: 0,
      retweetCount: 0,
      likeCount: 0,
      emailCount: 0
    }
  }

  handleCommentClick = () => {
    this.setState((prevState, { commentCount }) => ({
      commentCount: prevState.commentCount + 1
    }));
  }

  handleRetweetClick = () => {
    this.setState((prevState, { retweetCount }) => ({
      retweetCount: prevState.retweetCount + 1
    }));
  }

  handleLikeClick = () => {
    this.setState((prevState, { likeCount }) => ({
      likeCount: prevState.likeCount + 1
    }));
  }

  handleEmailClick = () => {
    this.setState((prevState, { emailCount }) => ({
      emailCount: prevState.emailCount + 1
    }));
  }

  render() {
    return (
      <div className='footer-container'>
        <i className="far fa-comment" onClick={this.handleCommentClick}> {this.state.commentCount}</i>
        <i className="fas fa-sync" onClick={this.handleRetweetClick}> {this.state.retweetCount}</i>
        <i className="far fa-heart" onClick={this.handleLikeClick}> {this.state.likeCount}</i>
        <i className="far fa-envelope" onClick={this.handleEmailClick}> {this.state.emailCount}</i>
      </div>
    );
  }
}

export default Footer;
