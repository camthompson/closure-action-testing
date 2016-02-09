import Ember from 'ember';

const {
  Component
} = Ember;

export default Component.extend({
  newListName: '',

  actions: {
    createList() {
      let name = this.get('newListName');
      this.attrs.create(name);
    }
  }
});
