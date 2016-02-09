import Ember from 'ember';

const {
  computed,
  Controller
} = Ember;

export default Controller.extend({
  newListName: '',

  lists: computed(function() {
    return this.store.findAll('list');
  }),

  actions: {
    createList(name) {
      return this.store.createRecord('list', { name }).save();
    },

    removeList(list) {
      list.destroyRecord();
    },

    addEntry(list, name) {
      this.store.createRecord('entry', { list, name }).save();
    },

    removeEntry(entry) {
      entry.destroyRecord();
    }
  }
});
