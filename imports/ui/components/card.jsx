import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import ReactDOM from 'react-dom';
import {Cards} from '../../api/cards';

export default class Card extends Component {

  removeCard() {
    Meteor.call('cards.remove', this.props.card._id);
  }

  updateCard() {
    $('.list-card-title.' + this.props.card._id).attr('contenteditable','true');
    $('.list-card-title.' + this.props.card._id).blur(() => {
      $('.list-card-title.' + this.props.card._id).attr('contenteditable','false');
      var newCardName = $('.list-card-title.' + this.props.card._id).text();
      Meteor.call('cards.update', this.props.card._id, newCardName);
    });

  }

  render() {
    return (
      <div key={this.props.key}>
        <div className="list-card">
          <div className="list-card-details">
            <div className={"list-card-title " + this.props.card._id}>
              {this.props.card.title}
            </div>
            <span className="icon icon-lg dark-hover div-header-icon">
              <i className="fa fa-pencil" onClick={this.updateCard.bind(this)}/>
            </span>
            <span className="icon icon-lg dark-hover div-header-icon">
              <i className="fa fa-times" onClick={this.removeCard.bind(this)}/>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
