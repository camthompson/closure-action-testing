import Ember from 'ember';

const {
  Component
} = Ember;

export default Component.extend({
  actions: {
    remove() {
      this.attrs.remove(this.get('list'));
    }
  }
});
