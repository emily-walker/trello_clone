import React from 'react';

const Navbar = React.createClass({

  getInitialState() {

    return {
      userDetails: {
        name: "Emily Walker",
        avatar_url: "https://trello-avatars.s3.amazonaws.com/a2ae97a443fe8c1de0da09cd010f133f/30.png"
      }
    }

  },

  render: function () {
    return (
      <nav className="nav">
        <div className="nav-left">
          <span className="nav-item">
          <a className="button nav-button" href="#">
             <span className="icon icon-lg light">
          <i className="fa fa-trello"/>
        </span>
            <span className="nav-element-text">Boards</span>
          </a>
          <p className="control has-icon">
            <input className="input" type="text"/>
            <span className="icon icon-lg light nav-search-icon">
              <i className=" fa fa-search fa-flip-horizontal"/>
              </span>
          </p>
            </span>
        </div>

        <div className="nav-center">
          <span className="nav-item">
          <a className="nav-logo-container">
              <span className="nav-logo"/>
            </a>
            </span>
        </div>

  <span className="nav-toggle">
    <span/>
    <span/>
    <span/>
  </span>

        <div className="nav-right nav-menu">
          <a className="button nav-button" href="#">
        <span className="icon icon-lg light nav-button-icon">
          <i className="fa fa-plus"/>
        </span>
          </a>
          <a className="button nav-button" href="#">
             <img src={this.state.userDetails.avatar_url}/>
            <span className="nav-element-text">{this.state.userDetails.name}</span>
          </a>
      <a className="button nav-button" href="#">
        <span className="icon icon-lg light nav-button-icon">
          <i className="fa fa-info"/>
        </span>
      </a>
      <a className="button nav-button" href="#">
        <span className="icon icon-lg light nav-button-icon">
          <i className="fa fa-bell-o"/>
        </span>
      </a>
        </div>
      </nav>
    )
  }

});

export default Navbar;