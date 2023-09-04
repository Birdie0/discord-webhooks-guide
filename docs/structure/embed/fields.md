# fields

Allows you to use multiple `title + description` blocks in embed. `fields` is an array of `field` objects. Each object includes three values:

* `name` - sets name for field object. Required;
* `value` - sets description for field object. Required;
* `inline` - if `true` then sets field objects in same line, **but** if you have more than 3 objects with enabled `inline` or just too long you will get rows with 3 fields in each one or with 2 fields if you used `thumbnail` object. `false` by default. Optional.

P.S. You can use up to 25 fields in same embed. `name` and `value` support [Discord Markdown](/markdown.md).

Example:

```json
{
  "embeds": [{
    "fields": [
      {
        "name": "Cat",
        "value": "Hi! :wave:",
        "inline": true
      },
      {
        "name": "Dog",
        "value": "hello!",
        "inline": true
      },
      {
        "name": "Cat",
        "value": "wanna play? join to voice channel!"
      },
      {
        "name": "Dog",
        "value": "yay"
      }
    ]
  }]
}
```

![fields example](../../img/structure/embed/fields.png)
