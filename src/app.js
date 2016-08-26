import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar';
import List from './components/list';


const App = React.createClass({

  getInitialState() {

    return {
      boardName: "Tangerine",
      lists: [
        {
          name: "BACKLOG",
          cards: [
            {
              title: "Navbar",
              Members: [],
              Description: "Description goes here"
            },
            {
              title: "Main",
              Members: [],
              Description: "Description goes here"
            },
            {
              title: "Footer",
              Members: [],
              Description: "Description goes here"
            }
          ]
        },
        {
          name: "NEXT",
          cards: [
            {
              title: "Navbar",
              Members: [],
              Description: "Description goes here"
            },
            {
              title: "Main",
              Members: [],
              Description: "Description goes here"
            },
            {
              title: "Footer",
              Members: [],
              Description: "Description goes here"
            }
          ]
        }
      ]
    }
  },


  render: function () {
    return (
      <div className="page-content">
        <Navbar/>
        <div className="board-header">
          <a className="board-header-btn">
            <span className="board-header-btn-name">{this.state.boardName}</span>
          </a>
          <div className="board-header-btns mod-left">
          </div>
        </div>
        <div id="board">
          <List lists={this.state.lists}/>
        </div >
      </div>
    );
  }
});

ReactDOM.render(<App/>, document.getElementById('app'));

