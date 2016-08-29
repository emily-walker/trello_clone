import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export const Cards = new Mongo.Collection('cards');

Meteor.methods({
  'cards.insert' (title, listId) {
    //console.log(title, listId);
    check(title, String);
    Cards.insert({
      title: title,
      createdAt: new Date(),
      listId: listId
    });
  },

  'cards.remove' (cardId) {
    check(cardId, String);
    Cards.remove(cardId);
  },

  'cards.update' (cardId, newTitle) {
    check(cardId, String);
    Cards.update(cardId, {
      $set: {title: newTitle}
    });
  }
});