// TODO: Simplify the logic and requriements in here.
// There's a lot of duplication between on and once that we don't really need.
// We should probably utilize the fact that once calls on to fix the global/retro handling in once.
// Maybe dump the "once" modifier?

const Base = require('../common/Class');

let Router = Base.extend({}, {
  /** @lends juno.Router.prototype */

  constructor: function RouterConstructor() {
    /**
     * The event listeners.
     * 
     * @type {Object}
     * @private
     */
    defineProperty(this, '_events', {});
    
    /**
     * The events that have been previously called. Utilized for retroactive event listeners.
     *
     * @type {Object}
     * @private
     */
    defineProperty(this, '_hasCalled', {});
  },

  /**
   * Listen for a specific event and fire the handler function whenever the event is triggered.
   * 
   * @param {String} eventName - The name of the event that you want to listen to.
   * @param {Function} handler - A function that will be called when the event is fired.
   * @public
   */
  on: function(key, fn) {

    // Check for retroactive event listeners:
    var splits = key.split(':');

    // Allow global listeners in local scope:
    if (splits[0] === 'global') {
      splits.shift();
      key = splits.join(':');
      // Kick them out to the global function:
      return globalEvents.on(key, fn);
    }

    // Allow once listeners through the shorthand:
    if (splits[0] === 'once') {
      // Remove the "once" keyword:
      splits.shift();
      key = splits.join(':');
      // Kick them out to the once function:
      return this.once(key, fn);
    }

    // Allow retroactive listeners:
    if (splits[0] === 'retro') {
      // Remove the "retro" keyword:
      splits.shift();
      key = splits.join(':');
      if (this._hasCalled[key]) {
        fn.apply(this, this._hasCalled[key]);
      }
    }

    // Don't assume the key exists
    this._events[key] = this._events[key] || [];

    // Only add the function if it doesn't already exist
    if (this._events[key].indexOf(fn) === -1) {
      this._events[key].push(fn);
    }
  },

  /**
   * Listen for a specific eventand fire the handler function exactly once when the event is triggered.
   * This function acts the same as {$link juno.Events#on},
   * with the exception being that `handler` will only be called once.
   * 
   * @param {String} eventName - The name of the event that you want to listen to.
   * @param {Function} handler - A function that will be called when the event is fired.
   * @public
   */
  once: function(key, fn) {

    // Check for retroactive event listeners:
    var splits = key.split(':');

    // Allow global listeners in local scope:
    if (splits[0] === 'global') {
      splits.shift();
      key = splits.join(':');
      // Kick them out to the global function:
      return globalEvents.once(key, fn);
    }

    // Allow retroactive listeners:
    if (splits[0] === 'retro') {
      // Remove the "retro" keyword:
      splits.shift();
      key = splits.join(':');
      if (this._hasCalled[key]) {
        // Once should only call once so kick out early if we call out:
        return fn.apply(this, this._hasCalled[key]);
      }
    }

    var self = this;
    function once() {
      self.off(key, once);
      fn.apply(this, arguments);
    }
    return this.on(key, once);
  },

  /**
   * Remove a previously-bound handler function.
   * If no handler is specified, all handlers for the event will be removed.
   * 
   * @param  {String} [eventName] - The key for the event handler you would like to remove.
   * @param  {Function} [handler] - The specific handler function reference for the event that you would like to remove.
   * @public
   */
  off: function(key, fn) {
    // We don't allow you to remove all events so throw if you try to do so:
    if (!key) {
      throw new Error('You must call .off() with a key or a key and a function.');
    }

    // Do nothing if the key doesn't exist
    if (!this._events[key]) {
      return;
    }

    // Remove everything if no function provided
    if (!fn) {
      delete this._events[key];
      return;
    }

    // Otherwise, try to find the function, and if found, remove it
    var index = this._events[key].indexOf(fn);
    if (index > -1) {
      this._events[key].splice(index, 1);
    }
  },

  /**
   * Emit a given event.
   * 
   * @param {String} eventName - The name of the event that you want all handlers to fire on.
   * @param {...*} args - Additional arguments that will be passed to the event handlers.
   * @public
   */
  emit: function(key) {
    var args = toArray(arguments);
    // The first argument was the key
    args.shift();
    // Update the last hasCalled with new data:
    this._hasCalled[key] = args;

    // Ignore any calls that have no matching key
    if (!this._events[key]) {
      return [];
    }

    var results = [];
    this._events[key].forEach(function(fn) {
      results.push(fn.apply(this, args));
    }, this);

    return results;
  },

  /**
   * Retrieves the given event listeners registered for a given event.
   * 
   * @param  {String} eventName - The name of the event.
   * @return {Array} Returns the event listeners registered for the given event.
   * @public
   */
  listeners: function(key) {
    return this._events[key];
  }
});

/**
 * A global event interface
 * 
 * @name juno.events
 * @type {juno.Router#}
 * @public
 */
Router.global = new Router();
globalEvents = Router.global;

module.exports = Router;
