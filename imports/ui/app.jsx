import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Lists} from '../api/lists.js';
import List from './components/list.jsx';
import Navbar from './components/navbar.jsx';


class App extends Component {

  renderLists() {
    return this.props.lists.map((list) => (
      <List key={list._id} list={list}/>
    ));
  }

  checkSubmit(e) {
    if (e.which == 13) {
      this.addList();
      return false; 
    }
  }

  addList() {
    const title = $('.list-name-input').val();
    if (title.length > 0) {
      Meteor.call('lists.insert', title);
    }
    $('list-name-input').val('');
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
          <div className="list-wrapper mod-add is-idle">
            <input className="list-name-input" placeholder="Add a list..." autoComplete="off" type="text"
                   onKeyPress={this.checkSubmit.bind(this)}/>
          </div>
          </div>
        </div >
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
