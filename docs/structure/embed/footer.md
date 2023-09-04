# footer

Allows you to add footer to embed. `footer` is an object which includes two values:

* `text` - sets name for author object. Markdown is disabled here!!!
* `icon_url` - sets icon for author object. Requires `text` value.

Example:

```json
{
  "embeds": [{
      "footer": {
        "text": "Woah! *So cool!* :smirk:",
        "icon_url": "https://i.imgur.com/fKL31aD.jpg"
      },
      "description": "Your pizza is ready!\n:timer:ETA: 10 minutes."
  }]
}
```

![footer example](../../img/structure/embed/footer.png)
