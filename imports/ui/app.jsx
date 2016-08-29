import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Lists } from '../api/lists.js';
import List from './components/list.jsx';
import Navbar from './components/navbar.jsx';


class App extends Component {

  renderLists() {
    return this.props.lists.map((list) => (
      <List key={list._id} list={list} />
    ));
  }

  render() {
    return (
      <div className="page-content">
        <Navbar/>
        <div className="board-header">
          <a className="board-header-btn">
            <span className="board-header-btn-name">Tangerine</span>
          </a>
          <div className="board-header-btns mod-left">
          </div>
        </div>
        <div id="board">
          {this.renderLists()}
        </div >
      </div>
    );
  }
}

App.propTypes = {
  lists: PropTypes.array.isRequired
};

export default createContainer(() => {
  return {
    lists: Lists.find({}).fetch()
  };
}, App);
