# author

Adds Author block to embed. `author` is an object which includes three values:

* `name` - sets name.
* `url` - sets link. Requires `name` value. If used, transforms `name` into hyperlink.
* `icon_url` - sets avatar. Requires `name` value.

Example:

```json
{
  "embeds": [{
    "author": {
      "name": "Delivery Girl",
      "url": "https://www.reddit.com/r/Pizza/",
      "icon_url": "https://i.imgur.com/V8ZjaMa.jpg"
    },
    "description": "Your pizza is ready!\n:timer:ETA: 10 minutes."
  }]
}
```

![author example](../../img/structure/embed/author.png)
