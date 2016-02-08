import { test } from 'qunit';
import moduleForAcceptance from 'contextual-components/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance: Creating lists', {
  afterEach() {
    window.localStorage.clear();
  }
});

test('Creating lists', function(assert) {
  visit('/');
  fillIn('.new-list-name', 'Groceries');
  click('.create-list');
  fillIn('.new-list-name', 'TV Shows');
  click('.create-list');

  andThen(function() {
    assert.equal(find('.list').length, 2, 'All lists are shown');
    assert.equal(find(".list:contains('Groceries')").length, 1,
                 'Groceries list is shown');
    assert.equal(find(".list:contains('TV Shows')").length, 1,
                 'TV Shows list is shown');
  });
});
