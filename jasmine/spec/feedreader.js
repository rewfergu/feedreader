/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
  /* This is our first test suite - a test suite just contains
  * a related set of tests. This suite is all about the RSS
  * feeds definitions, the allFeeds variable in our application.
  */
  describe('RSS Feeds', function() {
    /* This is our first test - it tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty. Experiment with this before you get started on
     * the rest of this project. What happens when you change
     * allFeeds in app.js to be an empty array and refresh the
     * page?
     */
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    /* A test that loops through each feed
     * in the allFeeds object and ensures it has a URL defined
     * and that the URL is not empty.
     */

    it('should have defined URL', function() {
      for (var i = 0; i < allFeeds.length; i++) {
        expect(allFeeds[i].url).toBeDefined();
      }
    });

    it('should have a non empty URL string', function() {
      for (var i = 0; i < allFeeds.length; i++) {
        expect(allFeeds[i].url).not.toBe('');
      }
    });

    /* A test that loops through each feed
     * in the allFeeds object and ensures it has a name defined
     * and that the name is not empty.
     */
    it('should have a name defined', function() {
      for (var i = 0; i < allFeeds.length; i++) {
        expect(allFeeds[i].name).toBeDefined();
      }
    });

    it('should have a non empty name string', function() {
      for (var i = 0; i < allFeeds.length; i++) {
        expect(allFeeds[i].name).not.toBe('');
      }
    });
  });

  describe('The menu', function() {

    /* A test that ensures the menu element is
     * hidden by default. You'll have to analyze the HTML and
     * the CSS to determine how we're performing the
     * hiding/showing of the menu element.
     */
    it('should be hidden by default', function() {
      expect($('body').hasClass('menu-hidden')).toBeTruthy();
    });

    /* A test that ensures the menu changes
    * visibility when the menu icon is clicked. This test
    * should have two expectations: does the menu display when
    * clicked and does it hide when clicked again.
    */
    it('should change visibility when clicked', function() {
      $('.menu-icon-link').click();
      expect($('body').hasClass('menu-hidden')).toBeFalsy();
      $('.menu-icon-link').click();
      expect($('body').hasClass('menu-hidden')).toBeTruthy();
    });
  });

  describe('Initial Entries', function() {

    /* A test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     */

    beforeEach(function(done) {
      loadFeed(0, function() {
        done();
      });
    });

    it('should load feeds', function() {
      expect($('.feed').children('.entry-link').length).toBeGreaterThan(0);
    });
  });

  describe('New Feed Selection', function() {
    var $feedLinksA;
    var $feedLinksB;

    /* A test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     */
    beforeEach(function(done) {
      // load the first feed and save the result when it's done
      loadFeed(0, function() {
        $feedLinksA = $('.feed').html();
        done();
      });
    });

    it('should replace old feed', function(done) {
      // load the second feed
      // save and compare the result to above
      loadFeed(1, function() {
        $feedLinksB = $('.feed').html();
        expect($feedLinksA).not.toBe($feedLinksB);
        done();
      });
    });
  });
}());
