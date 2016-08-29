import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Cards } from './cards';

export const Lists = new Mongo.Collection('lists');