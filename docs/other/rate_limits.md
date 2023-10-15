# Rate Limits

Rate limits, or on other words limitation of request rate, allow to limit usage os specific APIs.
In case you've been using IFTTT you'll likely encountered rate limit errors as updates from your triggers are sent in bulk with no rate limit handling.

If to sum it up you can send **5** requests per **2** seconds per webhook, failed requests count towards rate limit same as successful ones.

If you're writing or making some thing that would require sending big number of webhook messages you have to implement proper rate limit handling.
All webhook links have separate webhooks, so if you have multiple created they won't affect each others.
Thankfully, request responses include all needed headers:

* `X-RateLimit-Limit` - number of requests that can be made during single rate limit window
* `X-RateLimit-Remaining` - number of remaining requests that can be made (decreases with each request, when it reaches zero next request will likely fail)
* `X-RateLimit-Reset` - Epoch time (seconds since 00:00:00 UTC on January 1, 1970) at which the rate limit resets
* `X-RateLimit-Reset-After` - Total time (in seconds) of when the current rate limit bucket will reset. Can have decimals to match previous millisecond rate limit precision
* `X-RateLimit-Bucket` - A unique string denoting the rate limit being encountered (non-inclusive of top-level resources in the path)

So generally you have to save and check these values before sending new requests so your app won't run into rate limit issues.

Another anti-request fail measure would be retrying request in case it failed, but still relying on response headers.

So usual implementation should be queue to which requests for sending are being added, before each request we have to check response headers,
if there's still space for another request (`X-RateLimit-Remaining` is greater than zero) perform one, otherwise wait `X-RateLimit-Reset-After` seconds or until after `X-RateLimit-Reset` time.

[Discord API reference](https://discord.com/developers/docs/topics/rate-limits#header-format)
