import React from 'react';
import Card from './card';

const List = React.createClass({

  render: function () {

    return (
      <div>
        {this.props.lists.map((list, index) => {
            return (
              <div key={index} className="list-wrapper">
                <div className="list">
                  <div className="list-header">
                    <textarea className="list-name" value={list.name}/>
                    <p className="list-header-num-cards">{list.cards.length} cards</p>
                  </div>
                  <div className="list-cards">
                    <Card cards={list.cards}/>
                    <div className="card-composer">
                      <div className="list-card">
                        <div className="list-card-details">
                          <textarea className="list-card-composer-textarea">
                          </textarea>
                        </div>
                      </div>
                      <div className="cc-controls">
                        <div className="cc-controls-section">
                          <p className="control">
                            <button className="button is-success">
                              Add
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    )

  }

});

export default List;