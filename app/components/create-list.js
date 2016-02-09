import Ember from 'ember';

const {
  Component
} = Ember;

export default Component.extend({
  newListName: '',
  showNameWarning: false,

  actions: {
    createList() {
      let name = this.get('newListName');
      this.attrs.create(name).then(() => {
        this.set('newListName', '');
        this.set('showNameWarning', false);
      }, () => this.set('showNameWarning', true));
    }
  }
});
