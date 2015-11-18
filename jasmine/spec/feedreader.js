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

    it('should have valid URL', function() {
      for (var i = 0; i < allFeeds.length; i++) {
        expect(allFeeds[i].url).toBeDefined();
      }
    });

    /* A test that loops through each feed
     * in the allFeeds object and ensures it has a name defined
     * and that the name is not empty.
     */
    it('should have valid name', function() {
      for (var i = 0; i < allFeeds.length; i++) {
        expect(allFeeds[i].name).toBeDefined();
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
      expect($('body').hasClass('menu-hidden')).not.toBeTruthy();
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
    var value = 0;
    var data;
    var data2;

    /* A test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     */
    beforeEach(function(done) {
      loadFeed(value, function() {
        done();
      });
    });

    it('should load feed 0', function() {
      data = $('.feed .entry-link:first-of-type').attr('href');
      expect(data).toBeDefined();
      value = 1;
    });

    it('should load feed 1 and replace data', function() {
      data2 = $('.feed .entry-link:first-of-type').attr('href');
      expect(data).not.toBe(data2);
    });

  });
}());
