# errors
Explorations in Error Tracking

###Rollbar vs New Relic

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


#### Considerations
Log uncaughtException, but then exit

When an exception is not handled anywhere else, it will be emitted on the process‘s 'uncaughtException' event. We can listen for this event to do some logging, but we should allow the process to shut down gracefully.



