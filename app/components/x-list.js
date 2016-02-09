import Ember from 'ember';

const {
  Component
} = Ember;

export default Component.extend({
  actions: {
    addEntry() {
      let name = this.get('newEntryName');
      this.attrs.addEntry(name);
    },

    remove(record) {
      this.attrs.remove(record);
    }
  }
});
