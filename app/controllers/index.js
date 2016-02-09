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
      let filter = { name };
      return this.store.queryRecord('list', { filter }).then((lists) => {
        if (lists.length === 0) {
          return this.store.createRecord('list', { name }).save();
        } else {
          return Ember.RSVP.reject();
        }
      });
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
