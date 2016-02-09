import Ember from 'ember';

const {
  Component
} = Ember;

export default Component.extend({
  newEntryName: '',

  actions: {
    addEntry() {
      let name = this.get('newEntryName');
      this.attrs.addEntry(name).then(() => {
        this.set('newEntryName', '');
      });
    }
  }
});
