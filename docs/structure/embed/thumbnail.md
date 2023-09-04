# thumbnail

Allows you to add thumbnail to the embed. Currently, there is no way to set width/height of the thumbnail.
`url` value must be valid url that starts with `http(s)://` or `attachment://`, more info about the latter one can be found on the [file](../file.md#embedding-attachments) page.

Example:

```json
{
  "embeds": [{
    "thumbnail": {
      "url": "https://upload.wikimedia.org/wikipedia/commons/3/38/4-Nature-Wallpapers-2014-1_ukaavUI.jpg"
    }
  }]
}
```

![thumbnail example](../../img/structure/embed/thumbnail.png)
