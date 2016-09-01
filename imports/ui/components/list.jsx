import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import Card from './card';
import {Lists} from '../../api/lists';
import {Cards} from '../../api/cards';

export default class List extends Component {

  toggleCardComposer() {
    $(".open-card-composer." + this.props.list._id + ", .card-composer." + this.props.list._id).toggle();
  }

  addNewCard(e) {
    e.preventDefault();
    const title = $('textarea.list-card-composer-textarea.' + this.props.list._id).val();
    if (title.length > 0) {
      Meteor.call('cards.insert', title, this.props.list._id);
      }
    this.toggleCardComposer();
    $('textarea.list-card-composer-textarea').val('');
  }

  removeList() {
    Meteor.call('lists.remove', this.props.list._id);
  }
  
  updateList() {
    $('.list-name.' + this.props.list._id).removeAttr("readonly", "readonly");
    $('.list-name.' + this.props.list._id).blur(() => {
      $('.list-name.' + this.props.list._id).attr("readonly", "readonly");
      var newTitle = $('.list-name.' + this.props.list._id).val();
      Meteor.call('lists.update', this.props.list._id, newTitle);
    });
  }

  filterCards() {
    let filteredCards = this.props.cards.filter(card => {
      return card.listId === this.props.list._id;
    });

    var x = filteredCards.map((card, i) => {
      return <Card key={i} card={card}/>
    });
    return x;
  }

  render() {
    return (
      <div key={this.props.key}>
        <div className="list-wrapper">
          <div className="list">
            <div className="list-header">
              <textarea className={"list-name " + this.props.list._id} defaultValue={this.props.list.title} readOnly="readonly"/>
              <span className="icon icon-lg dark-hover div-header-icon">
              <i className="fa fa-pencil" onClick={this.updateList.bind(this)}/>
            </span>
            <span className="icon icon-lg dark-hover div-header-icon">
              <i className="fa fa-times" onClick={this.removeList.bind(this)}/>
            </span>
            </div>
            <div className="list-cards">
              <div id="cards">
                {this.filterCards()}
              </div>
              <a className={"open-card-composer " + this.props.list._id}
                 onClick={this.toggleCardComposer.bind(this)}>
                Add a card...
              </a>
              <div className={"card-composer " + this.props.list._id}>
                <div className="list-card">
                  <div className="list-card-details">
                          <textarea className={"list-card-composer-textarea " + this.props.list._id}>
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
