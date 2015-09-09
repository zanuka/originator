# errors
Explorations in Error Tracking

###Rollbar vs New Relic (BrowserPro)
Our current project already utilizes New Relic for performance monitoring so we have the option of using their [BrowserPro][browser-pro-url] service.

Analyze Rollbar and New Relic error tracing and reporting:
- performance on page load
- file size
- admin options
- admin usability
- pricing
- deployment tracking
- source maps
- admin console query options
- uncaughtException handling (graceful exit)

For MVP launch, I recommend that we use Rollbar as our error tracking solution. It does all that we need it to do and New Relic's BrowserPro service just doesn't compare when it comes to the features and performance of Rollbar. The performance metrics currently provided by New Relic in our launch app are actually a bit redundant considering we are already sending logs to both splunk and Dreams.

Ideally — for SNKRS Web (post-MVP revisions) and for future .com (store) site — we would tap into our Splunk and Dreams stores to create a more meaningful performance and error tracking dashboards. I have provided a list of important error features to New Relic, but it's unlikely we'll see any of those features roll out anytime soon. So, we should create a story to get approval for using Rollbar. Once that is complete, we can write up an implementation story and get it wired up.

[browser-pro-url]: http://newrelic.com/browser-monitoring







