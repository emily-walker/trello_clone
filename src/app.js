import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';


const App = React.createClass({

  getInitialState() {

    return {
      lists: ["Rubbish1","Rubbish2","Rubbish3"]
    }

  },

  render: function () {
    return (
      <div >
        <Navbar/>
        <h1>My sweet project</h1>
        <div className="List">
          {this.state.lists.map((repo, index) => {
            return (
              <div key={index} className="repo-list-item">
                <span className="repo-list-meta repo-name">{repo.name}</span>
                <span className="repo-list-meta repo-description">{repo.description}</span>
                <span className="repo-list-meta repo-date">Updated on {repo.updated_at}</span>
              </div>
            )
          })}
        </div >
        <Footer/>
      </div>
    );
  }
});

ReactDOM.render(<App/>, document.getElementById('app'));

