import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Card from './card';
import { Lists } from '../../api/lists';
import { Cards } from '../../api/cards';

export default class List extends Component {

  toggleCardComposer() {
    $(".open-card-composer." + this.props.list._id._str + ", .card-composer." + this.props.list._id._str).toggle();
  }

  addNewCard (e) {
    e.preventDefault();
    const title = $('textarea.list-card-composer-textarea.' + this.props.list._id._str).val();
    if (title.length > 0) {
      Meteor.call('cards.insert', title, this.props.list._id);
    }
      $('textarea.list-card-composer-textarea').val('');
  }

  filterCards () {
    let filteredCards = this.props.cards.filter(card => {
      return card.listId._str === this.props.list._id._str;
    });

    var x = filteredCards.map((card, i) => {
      return <Card index={i} card={card} />
    });
    return x;
  }

  render() {
    return (
      <div>
        <div className="list-wrapper">
          <div className="list">
            <div className="list-header">
              <textarea className="list-name" value={this.props.list.title}/>
              <p className="list-header-num-cards">5 cards</p>
            </div>
            <div className="list-cards">
              {this.filterCards()}
              <a className={"open-card-composer " + this.props.list._id._str} onClick={this.toggleCardComposer.bind(this)}>
                Add a card...
              </a>
              <div className={"card-composer " + this.props.list._id._str}>
                <div className="list-card">
                  <div className="list-card-details">
                          <textarea className={"list-card-composer-textarea " + this.props.list._id._str}>
                          </textarea>
                  </div>
                </div>
                <div className="cc-controls">
                  <div className="cc-controls-section">
                    <p className="control">
                      <button className="button is-success mod-compact" onClick={this.addNewCard.bind(this)}>
                        Add
                      </button>
                          <span className="icon icon-lg dark-hover" onClick={this.toggleCardComposer.bind(this)}>
                            <i className="fa fa-close"/>
                          </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

List.propTypes = {
  list: PropTypes.object.isRequired,
  cards: PropTypes.array.isRequired
};

export default createContainer(() => {
  return {
    cards: Cards.find({}).fetch()
  }
}, List);
