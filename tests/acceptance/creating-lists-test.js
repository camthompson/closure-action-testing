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


  click(".list:contains('Groceries') .remove-list");

  andThen(function() {
    assert.equal(find('.list').length, 1, 'All lists are shown');
    assert.equal(find(".list:contains('Groceries')").length, 0,
                 'Groceries list is removed');
    assert.equal(find(".list:contains('TV Shows')").length, 1,
                 'TV Shows list is shown');
  });
});

test('Adding entries to lists', function(assert) {
  visit('/');
  fillIn('.new-list-name', 'Groceries');
  click('.create-list');
  fillIn('.new-list-name', 'TV Shows');
  click('.create-list');

  fillIn(".list:contains('Groceries') .new-entry-name", 'Eggs');
  click(".list:contains('Groceries') .add-entry");
  fillIn(".list:contains('Groceries') .new-entry-name", 'Bacon');
  click(".list:contains('Groceries') .add-entry");
  fillIn(".list:contains('TV Shows') .new-entry-name", 'Seinfeld');
  click(".list:contains('TV Shows') .add-entry");

  andThen(function() {
    assert.equal(find(".list:contains('Groceries') .entry:contains('Eggs')").length, 1,
                 'Eggs are shown in groceries');
    assert.equal(find(".list:contains('Groceries') .entry:contains('Bacon')").length, 1,
                 'Bacon are shown in groceries');
    assert.equal(find(".list:contains('TV Shows') .entry:contains('Seinfeld')").length, 1,
                 'Seinfeld are shown in groceries');
  });
});
