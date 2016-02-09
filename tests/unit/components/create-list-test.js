import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';

moduleForComponent('create-list', { unit: true });

test('It clears entry name on successful add', function(assert) {
  assert.expect(2);

  let attrs = {
    create(name) {
      assert.equal(name, 'TEST NAME LOL');
      return Ember.RSVP.Promise.resolve();
    }
  };
  let component = this.subject({ attrs });

  Ember.run(function() {
    component.set('newListName', 'TEST NAME LOL');
    component.send('createList');
  });

  assert.equal(component.get('newListName'), '');
});

test('It leaves entry name on failed add', function(assert) {
  assert.expect(2);

  let attrs = {
    create(name) {
      assert.equal(name, 'TEST NAME LOL');
      return Ember.RSVP.Promise.reject();
    }
  };
  let component = this.subject({ attrs });

  Ember.run(function() {
    component.set('newListName', 'TEST NAME LOL');
    component.send('createList');
  });

  assert.equal(component.get('newListName'), 'TEST NAME LOL');
});
