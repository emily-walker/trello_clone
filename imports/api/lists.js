import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Cards } from './cards';

export const Lists = new Mongo.Collection('lists');

Meteor.methods({
  'lists.insert' (title) {
    check(title, String);
    Lists.insert({
      title,
      createdAt: new Date(),
    });
  },

  'lists.remove' (listId) {
    Lists.remove(listId);
    Cards.remove({listId: listId})
  },

  'lists.update' (listId, newTitle) {
    check(newTitle, String);
    Lists.update(listId, {
      $set: {title: newTitle}
    });
  }
});