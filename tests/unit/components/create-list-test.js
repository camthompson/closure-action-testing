import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';

const {
  RSVP,
  run
} = Ember;

moduleForComponent('create-list', { unit: true });

test('It clears entry name on successful add', function(assert) {
  assert.expect(2);

  let attrs = {
    create(name) {
      assert.equal(name, 'TEST NAME LOL');
      return RSVP.Promise.resolve();
    }
  };
  let component = this.subject({ attrs });

  run(function() {
    component.set('newListName', 'TEST NAME LOL');
    component.send('createList');
  });

  assert.equal(component.get('newListName'), '');
});

test('It leaves entry name on failed add', function(assert) {
  assert.expect(3);

  let attrs = {
    create(name) {
      assert.equal(name, 'TEST NAME LOL');
      return RSVP.Promise.reject();
    }
  };
  let component = this.subject({ attrs });

  run(function() {
    component.set('newListName', 'TEST NAME LOL');
    component.send('createList');
  });

  assert.equal(component.get('newListName'), 'TEST NAME LOL');
  assert.equal(component.get('showNameWarning'), true);
});
